var n1 = parseFloat(prompt("Digite o primeiro número"));
var n2 = parseFloat(prompt("Digite o segundo número"));
var operation = prompt("Digite a operação que deseja realizar \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão");

function calculadora(v1, v2, op) {
  if (op === "1") {
    return "O valor da sua soma é igual a: " + (v1 + v2);
  } else if (op === "2") {
    return "O valor da sua subtração é igual a: " + (v1 - v2);
  } else if (op === "3") {
    return "O valor da sua multiplicação é igual a: " + v1 * v2;
  } else if (op === "4") {
    return "O valor da sua divisão é igual a: " + v1 / v2;
  } else {
    return 0;
  }
}
console.log(calculadora(n1, n2, operation));
