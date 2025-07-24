//execicios de javascript

//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
//

console.log('Boas vindas');

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
//
let nome = 'Samara';

console.log(`Bem vinda ${nome}`);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
//
//alert(`Bem vinda ${nome}`);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
//
//let linguagem = prompt('Qual linguagem de programação você mais gosta?');
//console.log(linguagem);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
// Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
//

let valor1 = 10;
let valor2 = 5;
let resultado = (valor1 + valor2);
console.log(`A soma de ` + valor1 + ` e ` + valor2 + ` é igual a ` + resultado + `.`);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
//

let resultado2 = (valor1 - valor2);
console.log(`A diferença entre ` + valor1 + ` e ` + valor2 + ` é igual a ` + resultado2 + `.`);

//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
//

//let idade = prompt('Insira sua idade.');
//let maiorMenor = idade > 17 ? 'maior de idade':'menor de idade';
//5
// console.log(maiorMenor);

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
//
//let numero = prompt('insira um numero');
//if (numero < 0) {
//    console.log('O numero eh negativo');
//} else {
//    if (numero > 0) {
//        console.log('O numero eh positivo');
//    }
//}

//Use um loop while para imprimir os números de 1 a 10 no console.
//

let counter = 1;

while (counter <= 10) {
    console.log(`estou na iteraçao `+ counter);
    counter++;
}


//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
//
let nota = 10;
let resposta = nota > 7 ? 'Aprovado':'Reprovado';
console.log(resposta);

//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
//
console.log(Math.random());

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
//
console.log(parseInt(Math.random() * 10 + 1));

//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
console.log(parseInt(Math.random() * 1000 + 1));

