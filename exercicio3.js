// Supondo que você tenha um objeto JSON com os valores de faturamento diário
const faturamentoDiario = {
    "1": 1000, // Faturamento do dia 1
    "2": 1500, // Faturamento do dia 2
    "3": 2000, // Faturamento do dia 3
    // Adicione os demais dias do mês aqui
};

// Função para calcular o menor valor de faturamento diário
function calcularMenorFaturamento(faturamento) {
    return Math.min(...Object.values(faturamento));
}

// Função para calcular o maior valor de faturamento diário
function calcularMaiorFaturamento(faturamento) {
    return Math.max(...Object.values(faturamento));
}

// Função para calcular a média mensal de faturamento
function calcularMediaMensal(faturamento) {
    const diasComFaturamento = Object.values(faturamento).filter(valor => valor > 0);
    const somaFaturamento = diasComFaturamento.reduce((acumulador, valor) => acumulador + valor, 0);
    return somaFaturamento / diasComFaturamento.length;
}

// Função para contar o número de dias em que o faturamento foi superior à média mensal
function contarDiasAcimaDaMedia(faturamento) {
    const mediaMensal = calcularMediaMensal(faturamento);
    return Object.values(faturamento).reduce((contador, valor) => {
        if (valor > mediaMensal) {
            contador++;
        }
        return contador;
    }, 0);
}

// Calcular e exibir os resultados
const menorFaturamento = calcularMenorFaturamento(faturamentoDiario);
const maiorFaturamento = calcularMaiorFaturamento(faturamentoDiario);
const diasAcimaDaMedia = contarDiasAcimaDaMedia(faturamentoDiario);

console.log("Menor faturamento: " + menorFaturamento);
console.log("Maior faturamento: " + maiorFaturamento);
console.log("Dias com faturamento acima da média: " + diasAcimaDaMedia);
