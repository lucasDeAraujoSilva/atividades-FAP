var qtd_candidato_x = 0;
var qtd_candidato_y = 0;
var qtd_candidato_z = 0;
var qtd_voto_nulo = 0;

function ask() {
  var task = parseInt(prompt("Deseja finalizar? \n 1 - Sim \n 2 - Não"));
  var win = Math.max(
    this.qtd_candidato_x,
    this.qtd_candidato_y,
    this.qtd_candidato_z,
    this.qtd_voto_nulo
  );
  if (task === 1) {
    alert(this.getWin(win));
  } else votacao();
}

function votacao() {
  var voto = parseInt(prompt("Digite em quem seja votar"));

  if (voto >= 889) {
    this.qtd_candidato_x = this.qtd_candidato_x + 1;
  } else if (voto >= 847 && voto < 889) {
    this.qtd_candidato_y = this.qtd_candidato_y + 1;
  } else if (voto >= 515 && voto < 847) {
    this.qtd_candidato_z = this.qtd_candidato_z + 1;
  } else if (voto >= 0 && voto < 515) {
    this.qtd_voto_nulo = this.qtd_voto_nulo + 1;
  } else {
    alert("Erro! \nInicie a votação novamente!");
    return;
  }

  ask();
}

function getWin(win) {
  if (this.qtd_candidato_x === win) {
    return (
      "O candidato X é o vencedor com: " +
      win +
      " votos" +
      "\n Candidato Y, teve: " +
      this.qtd_candidato_y +
      " votos" +
      "\n Candidato Z, teve : " +
      this.qtd_candidato_z +
      " votos" +
      "\n Quantidade de votos nulos: " +
      this.qtd_voto_nulo
    );
  } else if (this.qtd_candidato_y === win) {
    return (
      "O candidato Y é o vencedor com: " +
      win +
      " votos" +
      "\n Candidato X, teve: " +
      this.qtd_candidato_x +
      " votos" +
      "\n Candidato Z, teve: " +
      this.qtd_candidato_z +
      " votos" +
      "\n Quantidade de votos nulos: " +
      this.qtd_voto_nulo
    );
  } else if (this.qtd_candidato_z === win) {
    return (
      "O candidato Z é o vencedor com: " +
      win +
      " votos" +
      "\n Candidato X, teve: " +
      this.qtd_candidato_x +
      " votos" +
      "\n Candidato Y, teve: " +
      this.qtd_candidato_y +
      " votos" +
      "\n Quantidade de votos nulos: " +
      this.qtd_voto_nulo
    );
  } else if (this.qtd_voto_nulo === win) {
    return (
      "A quantidade de votos nulos foram superior que os demais candidatos: " +
      win
    );
  }
}
votacao();
