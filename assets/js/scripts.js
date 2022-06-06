var numero1 = Number(prompt('Digite o primeiro número: '));
var numero2 = Number(prompt('Digite o segundo número: '));

function verificaNumeros(numero1, numero2){
    const verificaIgualdade = numero1 === numero2;
    let mensagem;
    let soma = numero1 + numero2;

    if (verificaIgualdade){
        mensagem = `Os números ${numero1} e ${numero2} são iguais.`;
    } else {
        mensagem = `Os números ${numero1} e ${numero2} não são iguais.`;
    }

    if (numero1 < 10) {
        mensagem = mensagem + ` Sua soma é ${soma}, que é menor que 10 `;
    } else {
        mensagem = mensagem + ` Sua soma é ${soma}, que é maior que 10 `;
    }

    if (numero2 < 20) {
        mensagem = mensagem + ` e menor que 20.`;
    } else {
        mensagem = mensagem + ` e maior que 20.`;
    }

    alert(mensagem);
}

verificaNumeros(numero1, numero2);