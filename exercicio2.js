/*
    Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
    (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
    ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



    IMPORTANTE:

    Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/





function verificaFibonacci(numero) {
    // Verifica se o número é 0 ou 1, pois eles sempre estarão na sequência
    if (numero === 0 || numero === 1) {
        return true;
    }

    let anterior = 0;
    let atual = 1;

    // Loop para gerar os números da sequência de Fibonacci até atingir ou ultrapassar o número informado
    while (atual <= numero) {
        let proximo = anterior + atual;
        if (proximo === numero) {
            return true; // Se encontrarmos o número na sequência, retornamos verdadeiro
        }
        anterior = atual;
        atual = proximo;
    }

    return false; // Se o número não estiver na sequência, retornamos falso
}

// Número para verificar se pertence à sequência de Fibonacci
const numeroInformado = 10; // Você pode alterar este número conforme necessário

// Verifica se o número informado pertence à sequência de Fibonacci
if (verificaFibonacci(numeroInformado)) {
    console.log(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
    console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
}
