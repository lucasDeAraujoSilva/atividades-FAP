function checkidade() {
    var idade = parseFloat(prompt("Digite a sua idade"));

    try { 
      if(idade == "")  throw "Digite algo";
      if(isNaN(idade)) throw "Digite um número";
      if(idade >= 18 )   throw "Você é maior de idade";
      if(idade < 18)  throw "Você é menor de idade";
    }
    catch(err) {
      alert(err) 
    }
    finally {
        checkidade();
    }
  }

  checkidade()