// componentes.js

// FUNÇÃO CORRIGIDA: Descobre com precisão se a página atual está dentro de uma subpasta
const determinarPrefixo = () => {
    const path = window.location.pathname.toLowerCase();
    
    // Verifica se a URL termina com o nome da subpasta ou contém a pasta na rota
    if (path.includes('/bonecas/') || 
        path.includes('/checklist/') || 
        path.includes('/personagens/') || 
        path.includes('/comunidade/')) {
        return '../';
    }
    
    // Caso de segurança para quando abre o arquivo localmente sem servidor (ex: pasta\bonecas\bonecas.html)
    if (path.endsWith('bonecas.html') || 
        path.endsWith('checklist.html') || 
        path.endsWith('personagens.html') || 
        path.endsWith('comunidade.html')) {
        return '../';
    }
    
    return '';
};

const prefixo = determinarPrefixo();

// ESTRUTURA DO SEU MENU COMPLETO
const htmlMenu = `
<div class="menu-overlay">
    <button class="btn-fechar">×</button>
    <div class="menu-panel">
        <div class="menu-header">
            <img src="${prefixo}imagens/MH.svg" alt="MH Collectors" class="menu-logo">
            <span>Menu</span>
        </div>
        <ul class="menu-links">
            <li><a href="${prefixo}personagens/personagens.html"><img src="${prefixo}imagens/pessoas.svg" alt=""> Personagens</a></li>
            <li><a href="${prefixo}bonecas/bonecas.html"><img src="${prefixo}imagens/diamante.svg" alt=""> Bonecas</a></li>
            <li><a href="${prefixo}checklist/checklist.html"><img src="${prefixo}imagens/check.svg" alt=""> Checklist</a></li>
            <li><a href="${prefixo}comunidade/comunidade.html"><img src="${prefixo}imagens/comunidade.svg" alt=""> Comunidade</a></li>
            <li class="menu-divider"></li>
            <li><a href="${prefixo}conta.html"><img src="${prefixo}imagens/conta.svg" alt=""> Minha Conta</a></li>
            <li><a href="#"><img src="${prefixo}imagens/engrenagem.svg" alt=""> Configurações</a></li>
        </ul>
    </div>
</div>
`;

// TEXTO DO SEU RODAPÉ
const htmlFooterContent = `
<p>© 2026 MH Collectors. Monster High e todos os personagens relacionados são marcas registradas da Mattel, Inc. Este site é um projeto de fã, sem fins lucrativos, criado por entusiastas da marca. Não possuímos afiliação oficial, patrocínio ou endosso da Mattel. Todas as imagens e conteúdos são usados apenas para fins informativos e de catálogo.</p>
`;

function inicializarComponentes() {
    // Injeta o overlay do menu no topo do body
    document.body.insertAdjacentHTML('afterbegin', htmlMenu);

    // Alimenta todas as tags <footer> da página com o texto oficial
    const footers = document.querySelectorAll('footer');
    footers.forEach(f => {
        f.className = "footer"; 
        f.innerHTML = htmlFooterContent;
    });

    // Controladores do Menu Lateral
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

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', inicializarComponentes);