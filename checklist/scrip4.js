
const btnAbrir = document.querySelector('.btn-menu-unico');
const btnFechar = document.querySelector('.btn-fechar');
const overlay = document.querySelector('.menu-overlay');

btnAbrir.addEventListener('click', () => {
    // Adiciona a classe que faz o menu deslizar para dentro
    overlay.classList.add('aberto');
    // Trava a rolagem do corpo do site
    document.body.style.overflow = 'hidden'; 
});

btnFechar.addEventListener('click', () => {
    // Remove a classe para o menu deslizar para fora
    overlay.classList.remove('aberto');
    // Libera a rolagem do corpo do site
    document.body.style.overflow = 'auto'; 
});