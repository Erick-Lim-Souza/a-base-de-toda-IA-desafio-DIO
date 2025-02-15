// Função para calcular a posição final do herói
function calcularPosicaoFinal(posicaoInicial, totalPassos) {
  return posicaoInicial + totalPassos;
}

// Lendo entradas
const posicaoInicial = parseInt(gets());
const totalPassos = parseInt(gets());

// Calculando a posição final
const posicaoFinal = calcularPosicaoFinal(posicaoInicial, totalPassos);

// Exibindo o resultado
print(`Posicao final do heroi: ${posicaoFinal}`);
