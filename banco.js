function banco (conta, saldo, tipoDeConta, agencia){
    this.conta = conta;
    this.saldo = saldo;
    this.tipoDeConta = tipoDeConta;
    this.agencia = agencia;
     
  };
  
  function valorAtual(){
      console.log(this.saldo)
    }
  
   function adicionarValor(deposito){
     console.log(this.saldo = saldo + deposito);
    }
  
  function sacarValor(diminuir){
      console.log(this.saldo = saldo - diminuir)
    }
  function numeroConta(){
      console.log(this.agencia)
    }
  
  banco("0005-5" , 150 , "CC" , "0852");
  banco.mostrarSaldo = valorAtual();
  banco.somarValor = adicionarValor(50);
  banco.saque = sacarValor(10);
  banco.mostrarConta = numeroConta();
  