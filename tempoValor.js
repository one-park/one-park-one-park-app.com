document.addEventListener("DOMContentLoaded", function () {
  const tempoInput = document.getElementById("tempo");
  const servicoAdicionalInput = document.getElementById(
    "servico-adicional-get"
  );
  const valorInput = document.getElementById("valor");

  const precos = {
    "LAVAGEM SIMPLES": 45,
    "LAVAGEM C/CERA": 48,
  };

  tempoInput.addEventListener("input", function () {
    calcularValor();
  });

  servicoAdicionalInput.addEventListener("input", function () {
    calcularValor();
  });

  function calcularValor() {
    const tempoHoras = parseInt(tempoInput.value, 10);
    let valorHoras = 0;

    if (tempoHoras === 1) {
      valorHoras = 9.0;
    } else if (tempoHoras > 1) {
      valorHoras = 9.0 + (tempoHoras - 1) * 2.0;
    }

    const servicoAdicional = servicoAdicionalInput.value.toUpperCase();
    const valorServico = precos[servicoAdicional] || 0;

    const valorFinal = valorHoras + valorServico;
    valorInput.value = formatValue(valorFinal);
  }

  // Função para formatar o valor com duas casas decimais, removendo '.00' se o valor for inteiro
  // e adicionando o prefixo 'R$'
  function formatValue(value) {
    const formattedValue = value.toFixed(2).replace(/\.00$/, ""); // Remove '.00' se o valor for inteiro
    return `R$ ${formattedValue}`;
  }
});
