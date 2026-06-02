const personagens = [
    { nome: "Draculaura", imagem: "../imagens/imagens personagens/Draculaura_2010.webp" ,genero: "Feminino"},
    { nome: "Clawdeen Wolf", imagem: "../imagens/imagens personagens/Clawdeen_basic.webp" ,genero: "Feminino"},
    { nome: "Frankie Stein", imagem: "../imagens/imagens personagens/Frankie_Basic.webp" ,genero: "Feminino"},
    {nome: "Lagoona Blue", imagem: "../imagens/imagens personagens/lagoona.png" ,genero: "Feminino"},
    { nome: "Cleo de Nile", imagem: "../imagens/imagens personagens/cleo.png" ,genero: "Feminino"},
    { nome: "Deuce Gorgon", imagem: "../imagens/imagens personagens/Deuce_basic.webp" ,genero: "Masculino"},
    { nome: "Ghoulia Yelps", imagem: "../imagens/imagens personagens/ghoulia.png" ,genero: "Feminino"},
    { nome: "Holt Hyde", imagem: "../imagens/imagens personagens/Holt_Basic.webp" ,genero: "Masculino"},
    { nome: "Jackson Jekyll", imagem: "../imagens/imagens personagens/Jackson_basic.webp" ,genero: "Masculino"},
    { nome: "Spectra Vondergeist", imagem: "../imagens/imagens personagens/Spectra_basic.webp" ,genero: "Feminino"},
    { nome: "Abbey Bominable", imagem: "../imagens/imagens personagens/abbey.png" ,genero: "Feminino"},
    { nome: "Clawd Wolf", imagem: "../imagens/imagens personagens/Clawd_basic.webp" ,genero: "Masculino"},
    { nome: "Meowlody", imagem: "../imagens/imagens personagens/Meowlody.png" ,genero: "Feminino"},
    { nome: "Purrsephone", imagem: "../imagens/imagens personagens/Purrsephone.png" ,genero: "Feminino"},
    { nome: "Toralei Stripe", imagem: "../imagens/imagens personagens/Toralei_basic.webp" ,genero: "Feminino"},
    { nome: "Nefera de Nile", imagem: "../imagens/imagens personagens/nefera.png" ,genero: "Feminino"},
    { nome: "Rochelle Goyle ", imagem: "../imagens/imagens personagens/rochelle.png" ,genero: "Feminino"},
    { nome: "Venus McFlytrap", imagem: "../imagens/imagens personagens/venus.png" ,genero: "Feminino"},
    { nome: "Operetta", imagem: "../imagens/imagens personagens/operetta.png" ,genero: "Feminino"},
    { nome: "Robecca Steam", imagem: "../imagens/imagens personagens/robecca.png" ,genero: "Feminino"},
    { nome: "Howleen Wolf ", imagem: "../imagens/imagens personagens/Howleen.png" ,genero: "Feminino"},
    { nome: "Gil Webber", imagem: "../imagens/imagens personagens/gil.png" ,genero: "Masculino"},
    { nome: "Hoodude Voodoo", imagem: "../imagens/imagens personagens/Hoodude.png" ,genero: "Masculino"},
    { nome: "Skelita Calaveras", imagem: "../imagens/imagens personagens/Skelita_.webp" ,genero: "Feminino"},
    { nome: "Jinafire Long ", imagem: "../imagens/imagens personagens/Jinafire_Long.webp" ,genero: "Feminino"},
    { nome: "Scarah Screams", imagem: "../imagens/imagens personagens/scarah.png" ,genero: "Feminino"},
    { nome: "C.A. Cupid", imagem: "../imagens/imagens personagens/C.A.Cupid.png" ,genero: "Feminino"},
    { nome: "Catrine DeMew", imagem: "../imagens/imagens personagens/Catrine.png" ,genero: "Feminino"},
    { nome: "Gigi Grant", imagem: "../imagens/imagens personagens/gigi.png" ,genero: "Feminino"},
    { nome: "Twyla Boogeyman ", imagem: "../imagens/imagens personagens/Twyla.png" ,genero: "Feminino"},
    { nome: "Heath Burns", imagem: "../imagens/imagens personagens/heath.png" ,genero: "Masculino"},
    { nome: "Viperine Gorgon", imagem: "../imagens/imagens personagens/Viperine.webp" ,genero: "Feminino"},
    { nome: "Elissabat", imagem: "../imagens/imagens personagens/Elissabat_basic.webp" ,genero: "Feminino"},
    { nome: "Clawdia Wolf", imagem: "../imagens/imagens personagens/Clawdia.png" ,genero: "Feminino"},
    { nome: "Jane Boolittle", imagem: "../imagens/imagens personagens/Jane.png" ,genero: "Feminino"},
    { nome: "Honey Swamp", imagem: "../imagens/imagens personagens/Honey.png" ,genero: "Feminino"},
    { nome: "Slo Mo Mortavitch", imagem: "../imagens/imagens personagens/SloMo.png" ,genero: "Masculino"},
    { nome: "Catty Noir", imagem: "../imagens/imagens personagens/Catty_Noir.webp" ,genero: "Feminino"},
    { nome: "Wydowna Spider", imagem: "../imagens/imagens personagens/wydowna.png" ,genero: "Feminino"},
    { nome: "Bonita Femur", imagem: "../imagens/imagens personagens/Bonita.png" ,genero: "Feminino"},
    { nome: "Avea Trotter", imagem: "../imagens/imagens personagens/Avea.png" ,genero: "Feminino"},
    { nome: "Sirena Von Boo ", imagem: "../imagens/imagens personagens/Sirena.png" ,genero: "Feminino"},
    { nome: "Neighthan Rot", imagem: "../imagens/imagens personagens/Neighthan.webp" ,genero: "Masculino"},
    { nome: "Diretora Sem-Cabeça", imagem: "../imagens/imagens personagens/Diretora.png" ,genero: "Feminino"},
    { nome: "River Styxx", imagem: "../imagens/imagens personagens/River.png" ,genero: "Feminino"},
    { nome: "Porter Paintergeist ", imagem: "../imagens/imagens personagens/Porter.png" ,genero: "Masculino"},
    { nome: "Vandala Doubloons", imagem: "../imagens/imagens personagens/Vandala.png" ,genero: "Feminino"},
    { nome: "Kiyomi Haunterly", imagem: "../imagens/imagens personagens/Kiyomi.png" ,genero: "Feminino"},
    { nome: "Casta Fierce", imagem: "../imagens/imagens personagens/Casta.webp" ,genero: "Feminino"},
    { nome: "Marisol Coxi", imagem: "../imagens/imagens personagens/Marisol.webp" ,genero: "Feminino"},
    { nome: "Lorna McNessie", imagem: "../imagens/imagens personagens/Lorna.webp" ,genero: "Feminino"},
    { nome: "Invisi Billy", imagem: "../imagens/imagens personagens/Invisi_Billy.webp" ,genero: "Masculino"},
    { nome: "Amanita Nightshade", imagem: "../imagens/imagens personagens/Amanita.webp" ,genero: "Feminino"},
    { nome: "Isi Dawndancer", imagem: "../imagens/imagens personagens/Isi.webp" ,genero: "Feminino"},
    { nome: "Batsy Claro", imagem: "../imagens/imagens personagens/Batsy.webp" ,genero: "Feminino"},
    { nome: "Kjersti Trollsønn", imagem: "../imagens/imagens personagens/Kjersti.webp" ,genero: "Feminino"},
    { nome: "Finnegan Wake", imagem: "../imagens/imagens personagens/Finnegan.webp" ,genero: "Masculino"},
    { nome: "Manny Taur", imagem: "../imagens/imagens personagens/Manny.webp" ,genero: "Masculino"},
    { nome: "Iris Clops", imagem: "../imagens/imagens personagens/Iris.webp" ,genero: "Feminino"},
    { nome: "Astranova", imagem: "../imagens/imagens personagens/Astranova.webp" ,genero: "Feminino"},
    { nome: "Elle Eedee", imagem: "../imagens/imagens personagens/Elle.webp" ,genero: "Feminino"},
    { nome: "Luna Mothews ", imagem: "../imagens/imagens personagens/Luna.webp" ,genero: "Feminino"},
    { nome: "Mouscedes King", imagem: "../imagens/imagens personagens/Mouscedes.webp" ,genero: "Feminino"},
    { nome: "Peri & Pearl Serpentine", imagem: "../imagens/imagens personagens/Peri_Pearl.webp" ,genero: "Feminino"},
    { nome: "Kala Mer'ri", imagem: "../imagens/imagens personagens/Kala.webp" ,genero: "Feminino"},
    { nome: "Posea Reef", imagem: "../imagens/imagens personagens/Posea.webp" ,genero: "Feminino"},
    { nome: "Kieran Valentine", imagem: "../imagens/imagens personagens/Kieran.png" ,genero: "Masculino"},
    { nome: "Garrott du Roque", imagem: "../imagens/imagens personagens/Garrott.webp" ,genero: "Masculino"},
    { nome: "Gooliope Jellington", imagem: "../imagens/imagens personagens/Gooliope.webp" ,genero: "Feminino"},
    { nome: "Djinni Grant", imagem: "../imagens/imagens personagens/Djinni.webp" ,genero: "Feminino"},
    { nome: "Gilda Goldstag", imagem: "../imagens/imagens personagens/Gilda.webp" ,genero: "Feminino"},
];

const container = document.getElementById('lista-personagens');
const busca = document.getElementById('campo-busca');
const selectCategoria = document.getElementById('filtro-categoria');

function renderizar(lista) {
    if (!container) return;
    
    // O segredo está no href apontando para ../perfil.html?personagem=
    // Usamos o p.id (ou p.slug) que está cadastrado nos dados do personagem
    container.innerHTML = lista.map(p => `
        <div class="perso-card">
            <div class="perso-img-container">
                <img src="${p.imagem}" alt="${p.nome}" loading="lazy">
            </div>
            <h3 class="perso-nome">${p.nome}</h3>
            <a href="../paginapersonagens/perfil.html?personagem=${p.id || p.slug || p.nome.toLowerCase().replace(/ /g, '-')}" class="perso-link">Explorar</a>
        </div>
    `).join('');

    const cards = container.querySelectorAll('.perso-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visivel');
        }, index * 35);
    });
}

function atualizarContador(quantidade) {
    const contador = document.getElementById("contador-resultados");
    if (contador) {
        contador.innerText = `${quantidade} ${quantidade === 1 ? 'personagem encontrado' : 'personagens encontrados'}`;
    }
}


function aplicarFiltrosPersonagens() {
    // Se não encontrar o array 'personagens', cria um array vazio para não travar a página
    if (typeof personagens === 'undefined') {
        console.error("Erro: O array global 'personagens' não foi encontrado. Verifique se o arquivo de dados foi carregado antes deste.");
        return;
    }

    const termo = busca ? busca.value.toLowerCase().trim() : '';
    const categoria = selectCategoria ? selectCategoria.value : 'todos';

    // Começa com todos os personagens
    let filtrados = [...personagens];

    // 1. Filtra por texto digitado
    if (termo) {
        filtrados = filtrados.filter(p => p.nome.toLowerCase().includes(termo));
    }

    // 2. Filtra por Gênero/Categoria (Feminino / Masculino)
    if (categoria === "femininos") {
        filtrados = filtrados.filter(p => p.genero === "Feminino"); 
    } else if (categoria === "masculinos") {
        filtrados = filtrados.filter(p => p.genero === "Masculino");
    }

    // 3. Aplica a Ordenação Alfabética correta
    if (categoria === "a-z") {
        filtrados.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (categoria === "z-a") {
        filtrados.sort((a, b) => b.nome.localeCompare(a.nome));
    }

    // Renderiza o resultado final
    renderizar(filtrados);
    atualizarContador(filtrados.length);
}

// Torna a função global para o 'onchange="filtrarPorCategoria(this.value)"' do HTML funcionar
window.filtrarPorCategoria = function(categoria) {
    // Se o seu select do HTML passar o valor, mudamos o select interno para sincronizar
    if (selectCategoria && categoria) {
        selectCategoria.value = categoria;
    }
    aplicarFiltrosPersonagens();
};

// --- 4. EVENTOS DE ENTRADA ---
if (busca) {
    busca.addEventListener('input', aplicarFiltrosPersonagens);
}

if (selectCategoria) {
    selectCategoria.addEventListener('change', aplicarFiltrosPersonagens);
}

// --- 5. MENU OVERLAY MOBILE ---
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

// --- INITIALIZATION ---
// Executa o filtro inicial assim que o script carrega
document.addEventListener("DOMContentLoaded", () => {
    aplicarFiltrosPersonagens();
});