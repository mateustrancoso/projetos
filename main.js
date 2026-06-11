// animação do botão ao clicar:

const botao = document.getElementById('send');

botao.addEventListener('click', function() {
    botao.classList.add('animacao');
    setTimeout(function() {
        botao.classList.remove('animacao');
    }, 150);
});

// envio de formulário com mensagem de sucesso e "animação" de enviar:

const formulario = document.getElementById('formulario');
const textoBotao = botao.querySelector('.btn-texto');
const spinner = botao.querySelector('.spinner');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    botao.disabled = true;
    textoBotao.textContent = "Enviando...";
    spinner.classList.remove('oculto');
    setTimeout(() => {
        alert("Formulário enviado com sucesso!");
        botao.disabled = false;
        textoBotao.textContent = "Enviar";
        spinner.classList.add('oculto');
        formulario.reset();
    }, 2000);
});