const botoes = document.querySelectorAll('.botao'); 
const personagens = document.querySelectorAll('.personagem');

function removerClasseSelecionado(selector) {
    const selecionado = document.querySelector(`${selector}.selecionado`);
    if (selecionado) {
        selecionado.classList.remove('selecionado');
    }
}

function selecionarElemento(elemento) {
    elemento.classList.add('selecionado');
}

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        removerClasseSelecionado('.botao');
        selecionarElemento(botao);

        removerClasseSelecionado('.personagem');
        selecionarElemento(personagens[indice]);
    });
});

