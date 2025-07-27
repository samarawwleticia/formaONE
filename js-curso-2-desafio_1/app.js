let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

let nomeCidade;
let valor1;
let valor2;
let resultado;

function msgConsole() {
    console.log('O botão foi clicado');
};

function msgAlert() {
    alert('Eu amo JS')
}

function cidade(){
    nomeCidade = prompt('Fale uma cidade do Brasil');
    alert('Estive em ' + nomeCidade + ' e lembrei de você');
}

function soma(){
    valor1 = Number(prompt('insira o valor 1'));
    valor2 = Number(prompt('insira o valor 2'));
    resultado = (valor1 + valor2);
    alert('A soma é ' + resultado);
}