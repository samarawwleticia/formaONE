//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function imc(altura, peso) {
    let resultado = (altura/peso);
    return resultado;
}




//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
//

function fatorial(numero) {
    let resultado = 1;
    while(numero > 0){
        resultado *= numero;
        numero--;
    }
    return resultado;
}

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
//

function converte(dolar) {
    return dolar *= 4.80;
}


//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero) {

    for(let i = 1; i <= 10; i++) {
        console.log(`${numero} * ${i} = ${numero*i}`);
    }
}

tabuada(1);