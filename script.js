document.addEventListener("DOMContentLoaded", () => {
    
    
    const elementosParaAnimar = document.querySelectorAll('.card-animado');

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
              
                entrada.target.classList.add('visivel');
                
               
                if (entrada.target.classList.contains('colecao-imagem')) {
                    iniciarComentarioRochelle();
                }
                
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.2 
    });

    elementosParaAnimar.forEach(elemento => observador.observe(elemento));


    
    function iniciarComentarioRochelle() {
        const textoContainer = document.getElementById("texto-animado");
        const balao = document.querySelector(".balao-comentario");
        const mensagem = "Eu amo esse site!!!!";
        let caractereIndex = 0;

        
        setTimeout(() => {
            balao.style.display = "block";
            
            
            textoContainer.style.animation = "pisca-cursor 0.7s infinite alternate";

            function digitarLetra() {
                if (caractereIndex < mensagem.length) {
                    textoContainer.textContent += mensagem.charAt(caractereIndex);
                    caractereIndex++;
                    setTimeout(digitarLetra, 100); 
                } else {
                    
                    setTimeout(() => {
                        textoContainer.style.borderRight = "none";
                    }, 2000);
                }
            }

            digitarLetra();
        }, 600);
    }
});


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

const btnTopo = document.getElementById('btn-topo');

// Aparece ou desaparece dependendo do scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTopo.classList.add('visivel');
    } else {
        btnTopo.classList.remove('visivel');
    }
});

// Suaviza o clique do link <a>
btnTopo.addEventListener('click', (e) => {

    
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Faz a rolagem ser lisinha e profissional
    });
});