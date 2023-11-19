var n1 = parseFloat(prompt("Digite o primeiro número"));
var n2 = parseFloat(prompt("Digite o segundo número"));
var operation = prompt("Digite a operação que deseja realizar \n + = Soma \n - = Subtração \n * = Multiplicação \n / = Divisão");

function calculadora(v1, v2, op) {
  if (op === "+") {
    return "O valor da sua soma é igual a: " + (v1 + v2);
  } else if (op === "-") {
    return "O valor da sua subtração é igual a: " + (v1 - v2);
  } else if (op === "*") {
    return "O valor da sua multiplicação é igual a: " + v1 * v2;
  } else if (op === "/") {
    return "O valor da sua divisão é igual a: " + parseInt(v1 / v2) + ". O resto da sua divisão é: " + v1 % v2;
  } else {
    return "Por favor, verifique as solicitações nos campos e vamos recomeçar! ;)";
  }
}
console.log(calculadora(n1, n2, operation));
