// variáveis

const botao = document.querySelector('#btn-status');
const mensagem = document.querySelector('#msg-status');

// funções

function mostrarStatus(){

    mensagem.textContent = "Status: Disponível para novos projetos!";

    mensagem.style.display = "block";

    console.log("Botão clicado com sucesso!");

}

botao.addEventListener('click', mostrarStatus);
