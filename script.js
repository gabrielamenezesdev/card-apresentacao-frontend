// variáveis

const botao = document.querySelector('#btn-status');
const mensagem = document.querySelector('#msg-status');
const transition = document.querySelector('#btn-mudar');
const listaHabilidades = document.querySelector('#lista-habilidades');

// array

const minhasHabilidades = ['HMTML5', 'CSS3', 'JavaScript', 'Inglês'];

// funções

function mostrarStatus(){

    if (mensagem.style.display === 'none' || mensagem.style.display === '') {
        
        mensagem.textContent = "Disponível para novos projetos"
        mensagem.style.display = "block"
        botao.textContent = 'Ocultar'
        botao.style.backgroundColor = '#ffffff'

    } else {

        botao.textContent = 'Ver Status'
        mensagem.style.display = "none"
        botao.style.backgroundColor = ''

    }
    
}

function alterarTema(){
    
    document.body.classList.toggle('mudar-tema')

}

function mostrarHabilidade (){

    minhasHabilidades.forEach(function(Item){

        const novoItem = document.createElement('li');
        novoItem.textContent = Item
        listaHabilidades.appendChild(novoItem)

    })

}

// eventos

botao.addEventListener('click', mostrarStatus)
transition.addEventListener('click', alterarTema)

//

mostrarHabilidade()
