var name = prompt("Digite seu nome completo");

function age() {
  var nasc = parseFloat(prompt("Digite seu ano de nascimento"));
  var result = 2022 - nasc;

  while (nasc >= 1922 || nasc <= 2021) {
    if (nasc >= 1922 && nasc <= 2021) {
      alert(this.name + ", você completou ou completará " + result + " anos.");
    } else {
      age();
      throw new Error("Digite uma data de nascimento válida");
    };
  };
};

age();
