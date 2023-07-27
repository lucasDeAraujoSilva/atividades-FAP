function calculadora() {
  var n1 = parseFloat(prompt("Digite o primeiro número"));
  var n2 = parseFloat(prompt("Digite o segundo número"));
  var operation = prompt("Digite a operação que deseja realizar \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n 5 - Fechar");

  while (operation) {
    if (operation === "1") {
      alert("O valor da sua soma é igual a: " + (n1 + n2));
    } else if (operation === "2") {
      alert("O valor da sua subtração é igual a: " + (n1 - n2));
    } else if (operation === "3") {
      alert("O valor da sua multiplicação é igual a: " + n1 * n2);
    } else if (operation === "4") {
      alert("O valor da sua divisão é igual a: " + n1 / n2);
    } else if (operation === "5") {
      alert("Fechar");
      return;
    } else {
      alert("Essa opção não existe");
    }
    calculadora();
  }
}

calculadora();
