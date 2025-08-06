let listaDeNumerosSorteados = []; //cria lista de numeros que já foram sorteados
let numeroLimite = 100; //numero limite de chutes 
let numeroSecreto = gerarNumeroAleatorio(); //gera numero sorteado
let tentativas = 1; //inicializa numero de tentativas = 1

function exibirTextoNaTela(tag, texto) { //função q exibe os textos na tela
    let campo = document.querySelector(tag);  //fala qual o campo a exibir o texto
    campo.innerHTML = texto;                  //preenche o campo com o texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); //recurso de acessibilidade: narração
}

function exibirMensagemInicial() { //funções com textos de mensagens iniciais.
    exibirTextoNaTela('h1', 'Jogo do numero secreto');                    
    exibirTextoNaTela('p', `Escolha um numero entre 1 e ${numeroLimite}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {                                                   //envia mensagem de acerto
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com
${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {                                                                       // envia mensagem de erro
        if(chute > numeroSecreto ) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            if(chute < numeroSecreto) {
                exibirTextoNaTela('p', 'O número secreto é maior');
            }
        }
        tentativas++;                                                              //add mais um numero de tentativas
        limparCampo();
    }
}

function limparCampo() {                                                           //limpa campo de chutes
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {                                                   // gera o numero sorteado
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){                              // limpa a lista caso todos os numeros tenham sido sorteados
        listaDeNumerosSorteados = [];   
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {                        // verifica se todos os numeros foram sorteados
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);                              // add numero sorteado na lista
        return numeroEscolhido;
    }
}

function reiniciarJogo() {                                                          // "reinicia" o jogo
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
