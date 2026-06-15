document.addEventListener("DOMContentLoaded", () => {
    // 1. Carrega os dados iniciais com base nos parâmetros da URL
    carregarPersonagemPorUrl();

    // 2. Ativa o funcionamento do Menu Mobile (Hambúrguer)
    configurarMenuMobile();
});

// ==========================================
// GERENCIAMENTO DE CARREGAMENTO E HISTÓRICO VIA URL
// ==========================================
function carregarPersonagemPorUrl() {
    const parametros = new URLSearchParams(window.location.search);
    const idPersonagem = parametros.get('personagem') || 'draculaura';
    
    // Reseta as classes antigas do corpo da página para evitar herança visual incorreta
    document.body.className = document.body.className.replace(/\bperfil-\S+/g, '');

    fetch('personagens.json') 
        .then(resposta => {
            if (!resposta.ok) throw new Error("Erro ao carregar o arquivo personagens.json");
            return resposta.json();
        })
        .then(bancoDeDados => {
            const dadosMonstrinha = bancoDeDados[idPersonagem];
            if (dadosMonstrinha) {
                document.body.classList.add(`perfil-${idPersonagem}`);
                preencherPaginaPerfil(dadosMonstrinha);
            } else {
                console.error("Personagem não encontrada no arquivo JSON.");
            }
        })
        .catch(erro => console.error("Erro crítico ao processar o perfil:", erro));
}

function preencherPaginaPerfil(dados) {
    try {
        // 1. Injeta os dados textuais primários
        document.getElementById('nome-personagem').textContent = dados.nome;
        document.getElementById('tag-especie').textContent = dados.especie.toUpperCase();
        
        // 2. Renderiza a Imagem Principal de Exibição
        const elementoFoto = document.getElementById('foto-personagem');
        if (elementoFoto && dados.fotoPrincipal) {
            elementoFoto.src = `../${dados.fotoPrincipal}`; 
        }

        // 3. Define o Padrão do Listrado de Fundo Dinâmico
        const cardFoto = document.getElementById('card-foto-personagem');
        if (cardFoto && dados.corFundoListras && dados.corFundoListras.length >= 2) {
            cardFoto.style.backgroundImage = `repeating-linear-gradient(-45deg, ${dados.corFundoListras[0]}, ${dados.corFundoListras[0]} 15px, ${dados.corFundoListras[1]} 15px, ${dados.corFundoListras[1]} 30px)`;
        }

        // 4. Injeção de Conteúdo nos Fluxos de Grid
        preencherGrid('grid-dados-rapidos', dados.dadosRapidos, criarInfoCard);
        preencherGrid('coluna-detalhes-esquerda', dados.colunaEsquerda, criarInfoCard);
        preencherGrid('coluna-detalhes-direita-inferior', dados.colunaDireitaInferior, criarInfoCard);

        // 5. Injeta o Módulo Amigas utilizando a nova fôrma inteligente
        const gridAmigas = document.getElementById('grid-melhores-amigas');
        if (gridAmigas && dados.melhoresAmigas) {
            gridAmigas.innerHTML = "";
            dados.melhoresAmigas.forEach(amiga => {
                const amigaObj = typeof amiga === 'string'
                    ? { id: amiga, nome: amiga.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase()), foto: `imagens/imagensperfil/${amiga.split('-')[0][0].toUpperCase() + amiga.split('-')[0].slice(1)}.png` }
                    : amiga;
                const avatar = criarAvatarAmiga(`../${amigaObj.foto}`, amigaObj.nome, amigaObj.id);
                gridAmigas.appendChild(avatar);
            });
        }

        // 6. Injeta a coleção de bonecas associada
        const gridBonecas = document.getElementById('grid-bonecas');
        if (gridBonecas && dados.bonecas) {
            gridBonecas.innerHTML = "";
            dados.bonecas.forEach(boneca => {
                const card = criarCardBoneca(boneca.nome, `../${boneca.foto}`, boneca.colecao || "Básicas");
                gridBonecas.appendChild(card);
            });
            observarCardsDeColecao();
        }

        // 7. Modifica Variáveis CSS globais baseado nas Cores do Tema do Monstrinho
        if (dados.corTema) {
            document.documentElement.style.setProperty('--cor-tema', dados.corTema);
            document.documentElement.style.setProperty('--cor-principal', dados.corTema);
            document.documentElement.style.setProperty('--cor-principal-clara', hexToRgba(dados.corTema, 0.18));
            const moldura = document.querySelector('.moldura-neon-foto');
            if (moldura) {
                moldura.style.boxShadow = `0 0 20px ${dados.corTema}, 0 0 40px ${dados.corTema}`;
            }
        }
    } catch (e) {
        console.error("Erro ao preencher elementos HTML:", e);
    }
}

function preencherGrid(idElemento, lista, funcaoCriacao) {
    const container = document.getElementById(idElemento);
    if (container && lista) {
        container.innerHTML = "";
        lista.forEach(item => {
            container.appendChild(funcaoCriacao(item.titulo, item.texto));
        });
    }
}

function hexToRgba(hex, alpha = 1) {
    const normalized = hex.replace('#', '');
    const bigint = parseInt(normalized.length === 3 ? normalized.split('').map(c => c + c).join('') : normalized, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function observarCardsDeColecao() {
    const cards = document.querySelectorAll('.card-boneca');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
                setTimeout(() => {
                    entry.target.classList.add('visivel');
                }, index * 30);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.01 });
    cards.forEach(card => observer.observe(card));
}

// Escuta a setinha de voltar nativa do navegador para atualizar os dados dinamicamente
window.addEventListener('popstate', () => {
    carregarPersonagemPorUrl();
});

// ==========================================
// MONITORAMENTO DE EVENTOS (Cliques e Interfaces)
// ==========================================

function configurarMenuMobile() {
    const btnAbrir = document.querySelector('.btn-menu-unico');
    const btnFechar = document.querySelector('.btn-fechar');
    const overlay = document.querySelector('.menu-overlay');

    if (btnAbrir && btnFechar && overlay) {
        btnAbrir.addEventListener('click', () => {
            overlay.classList.add('aberto');
            document.body.style.overflow = 'hidden'; 
        });

        btnFechar.addEventListener('click', () => {
            overlay.classList.remove('aberto');
            document.body.style.overflow = 'auto'; 
        });
    }
}

document.getElementById('grid-bonecas')?.addEventListener('click', (e) => {
    const botao = e.target.closest('.btn-acao-card');
    if (!botao) return;

    const card = botao.closest('.card-boneca');
    const caminhoFoto = card.getAttribute('data-foto') || '';
    const nomeArquivo = caminhoFoto.split('/').pop();

    if (botao.classList.contains('btn-check')) {
        let obtidas = JSON.parse(localStorage.getItem('mh-obtidas')) || [];
        botao.classList.toggle('ativo');
        
        if (botao.classList.contains('ativo')) {
            if (!obtidas.includes(nomeArquivo)) obtidas.push(nomeArquivo);
        } else {
            obtidas = obtidas.filter(id => id !== nomeArquivo);
        }
        localStorage.setItem('mh-obtidas', JSON.stringify(obtidas));
    } 

    if (botao.classList.contains('btn-favorito')) {
        let favoritos = JSON.parse(localStorage.getItem('mh-favoritos')) || [];
        botao.classList.toggle('ativo');
        
        if (botao.classList.contains('ativo')) {
            if (!favoritos.includes(nomeArquivo)) favoritos.push(nomeArquivo);
        } else {
            favoritos = favoritos.filter(id => id !== nomeArquivo);
        }
        localStorage.setItem('mh-favoritos', JSON.stringify(favoritos));
    }
});

// ==========================================
// COMPONENTES E FÔRMAS ESTRUTURAIS DE CRIAÇÃO
// ==========================================
function criarInfoCard(titulo, texto) {
    const card = document.createElement("div");
    card.classList.add("card-informacao-item"); 
    card.innerHTML = `
        <h3 class="titulo-info-card">${titulo}</h3>
        <p class="texto-info-card">${texto}</p>
    `;
    return card;
}

function gerarSlug(texto) {
    return texto
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-]/g, '')
        .replace(/\-+/g, '-');
}

function criarAvatarAmiga(foto, nome, slug) {
    if (!slug) slug = gerarSlug(nome);

    const link = document.createElement('a');
    link.classList.add('avatar-amiga-item-link');
    link.href = `?personagem=${encodeURIComponent(slug)}`;
    link.setAttribute('aria-label', `Ver perfil de ${nome}`);

    link.innerHTML = `
        <div class="avatar-amiga-item">
            <div class="moldura-circulo-amiga">
                <img src="${foto}" alt="Foto de ${nome}" loading="lazy">
            </div>
            <span class="nome-amiga-texto">${nome}</span>
        </div>
    `;

    // Intercepta o clique para mudar dinamicamente os dados injetando o ponto na barra de navegação sem travar o layout
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const novaUrl = `${window.location.pathname}?personagem=${slug}`;
        window.history.pushState({ estadoPerfil: true }, '', novaUrl);
        carregarPersonagemPorUrl();
    });

    return link;
}

function criarCardBoneca(nome, foto, colecao) {
    const card = document.createElement("div");
    card.classList.add("card-boneca"); 
    
    const nomeArquivo = foto.split('/').pop();
    
    card.setAttribute("data-id", nomeArquivo);
    card.setAttribute("data-foto", foto);

    const obtidas = JSON.parse(localStorage.getItem('mh-obtidas')) || [];
    const favoritos = JSON.parse(localStorage.getItem('mh-favoritos')) || [];

    const jaTemNaColecao = obtidas.includes(nomeArquivo);
    const jaEhFavorito = favoritos.includes(nomeArquivo);

    card.innerHTML = `
        <div class="card-boneca-img-container">
            <img src="${foto}" alt="${nome}" loading="lazy">
        </div>
        
        <div class="card-boneca-acoes">
            <button class="btn-acao-card btn-check ${jaTemNaColecao ? 'ativo' : ''}" title="Marcar como 'Tenho na coleção'">
                <svg viewBox="0 0 24 24" class="icone-vetor-card"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </button>
            <button class="btn-acao-card btn-favorito ${jaEhFavorito ? 'ativo' : ''}" title="Adicionar aos favoritos">
                <svg viewBox="0 0 24 24" class="icone-vetor-card"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
        </div>

        <h3 class="card-boneca-nome">${nome}</h3>
        <a href="../bonecas/bonecas.html?busca=${nome.trim().split(" ")[0].toUpperCase()}" class="card-boneca-link-explorar">EXPLORAR</a>
    `;
    return card;
}