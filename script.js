// variáveis

const botao = document.querySelector('#btn-status');
const mensagem = document.querySelector('#msg-status');

// funções

function mostrarStatus(){

    if (mensagem.style.display === 'none' || mensagem.style.display === '') {
        
        mensagem.textContent = "Disponível para novos projetos!"
        mensagem.style.display = "block"
        botao.textContent = 'Ocultar'
        botao.style.backgroundColor = '#ff4d4d'

    } else {

        botao.textContent = 'Ver Status'
        mensagem.style.display = "none"
        botao.style.backgroundColor = ''

    }
    
}

// eventos

botao.addEventListener('click', mostrarStatus);
