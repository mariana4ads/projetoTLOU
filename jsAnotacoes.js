/* o que precisamos fazer?
- quando clicar no botão do personagem na lista tempos que marcar o botão como selecionado e mostrar o personagem correspondente

OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado. */
// 1.1 - pegar os botões no JS 
const botoes = document.querySelectorAll('.botao'); 
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => { //forEach porque são varios botões ... adicionou indice no objetivo 2, para ver a lista dos personagens
    botao.addEventListener("click", () => {
        //console.log("clicou no botão", botao); teste clique
        const botaoSelecionado = document.querySelector(".botao.selecionado");

        // 1.3 - verificar se ja existe o botão selecionado, se sim, remover.
        botaoSelecionado.classList.remove("selecionado");

        // 1.2 - adicionar a classe "selecionado" quando clicar
        botao.classList.add("selecionado")

        // console.log("clicou no botão", botao); --------------- teste
        
// OBJETIVO 2
        // pegar personagens para poder mostrar ou esconder
        const personagemSelecionado = document.querySelector(".personagem.selecionado");

                // 2.3 - verificar se ja existe o botão selecionado, se sim, remover.
        personagemSelecionado.classList.remove("selecionado");

        // 2.2 - adicionar a classe "selecionado" quando clicar
        personagens[indice].classList.add("selecionado");
        
        

    });
});
