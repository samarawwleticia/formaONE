let nome;

function olaMundo(nome) {
    console.log('Olá, ' + nome +'!');
}

olaMundo('Samara');


let numero;

function dobra(numero){
    return console.log(numero*2);
}

dobra(2);


function media(num1, num2, num3){
    return console.log((num1+num2+num3)/3);
}

media(3,6,9);

function maior(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maior(11,16));

function mult(numero) {
    return (numero*numero);
}

console.log(mult(6));

