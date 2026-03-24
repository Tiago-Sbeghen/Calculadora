
let display = document.getElementById("display");
let valorAtual = "";

let botoes = document.querySelectorAll("button");


botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        let valor = botao.innerText;
        tratarClique(valor);
    });
});


function tratarClique(valor){

    if (valor === "="){
        calcular();
    } else {
        valorAtual += valor;
        display.innerText = valorAtual;
    };

};