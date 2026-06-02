document.addEventListener("DOMContentLoaded", () => {
    const parametros = new URLSearchParams(window.location.search);
    const idPersonagem = parametros.get('personagem') || 'draculaura';
    
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
                console.error("Personagem não encontrada.");
            }
        })
        .catch(erro => console.error("Erro crítico:", erro));
});

function preencherPaginaPerfil(dados) {
    try {
        // 1. Textos e conteúdo
        document.getElementById('nome-personagem').textContent = dados.nome;
        document.getElementById('tag-especie').textContent = dados.especie.toUpperCase();
        
        // 2. Foto Principal
        const elementoFoto = document.getElementById('foto-personagem');
        if (elementoFoto && dados.fotoPrincipal) {
            elementoFoto.src = `../${dados.fotoPrincipal}`; 
        }

        // 3. Gradiente
        const cardFoto = document.getElementById('card-foto-personagem');
        if (cardFoto && dados.corFundoListras && dados.corFundoListras.length >= 2) {
            cardFoto.style.backgroundImage = `repeating-linear-gradient(-45deg, ${dados.corFundoListras[0]}, ${dados.corFundoListras[0]} 15px, ${dados.corFundoListras[1]} 15px, ${dados.corFundoListras[1]} 30px)`;
        }

        // 4. Grids de texto
        preencherGrid('grid-dados-rapidos', dados.dadosRapidos, criarInfoCard);
        preencherGrid('coluna-detalhes-esquerda', dados.colunaEsquerda, criarInfoCard);
        preencherGrid('coluna-detalhes-direita-inferior', dados.colunaDireitaInferior, criarInfoCard);

       // 5. Grid Amigas
const gridAmigas = document.getElementById('grid-melhores-amigas');
if (gridAmigas && dados.melhoresAmigas) {
    gridAmigas.innerHTML = "";
    dados.melhoresAmigas.forEach(amiga => {
        // Passamos o amiga.id como terceiro parâmetro para criar o vínculo
        const avatar = criarAvatarAmiga(`../${amiga.foto}`, amiga.nome, amiga.id);
        gridAmigas.appendChild(avatar);
    });
}

        // 6. Grid Bonecas (O loop que tinha sumido voltou pra cá!)
        const gridBonecas = document.getElementById('grid-bonecas');
        if (gridBonecas && dados.bonecas) {
            gridBonecas.innerHTML = "";
            dados.bonecas.forEach(boneca => {
                // Passa o nome, o caminho da foto e a coleção correta
                const card = criarCardBoneca(boneca.nome, `../${boneca.foto}`, boneca.colecao || "Básicas");
                gridBonecas.appendChild(card);
            });
            observarCardsDeColecao();
        }

        // 7. Cores do Tema
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
        console.error("Erro ao preencher elements HTML:", e);
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
    }, {
        threshold: 0.01
    });
    cards.forEach(card => observer.observe(card));
}

// Gerenciador de Cliques do Perfil - Sincronizado por Arquivo de Imagem
document.getElementById('grid-bonecas')?.addEventListener('click', (e) => {
    const botao = e.target.closest('.btn-acao-card');
    if (!botao) return;

    const card = botao.closest('.card-boneca');
    const caminhoFoto = card.getAttribute('data-foto') || '';
    const nomeArquivo = caminhoFoto.split('/').pop(); // Extrai o ID único da imagem

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
            favoritos = favoritos.filter(id => id !== nomeArquivo); // Corrigido de 'favorites' para 'favoritos'
        }
        localStorage.setItem('mh-favoritos', JSON.stringify(favoritos));
    }
    
});