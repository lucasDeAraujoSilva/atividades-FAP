
//Classe abstrata

class car {
    modelo ="polo" //string
    marca ="volkswagen" //string
    ano = 2012 //number
    ligado = true //boleean

    ligar(){
        console.log(`O carro ${this.ligado} está funcionando`)
        }
    
    consultarAno(){
        console.log(`O ano do carro é ${this.ano}`)
    }
    consultarModelo(){
        console.log(`O modelo do carro é ${this.modelo}`)
    }
}






//Classe material

class car {
    modelo = this.modelo //string
    marca =this.marca //string
    ano = this.ano //number
    ligado = this.ligado //bollean

    ligar(){
        console.log(`O carro ${this.ligado} está funcionando`)
        }
    
    consultarAno(){
        console.log(`O ano do carro é ${this.ano}`)
    }
    consultarModelo(){
        console.log(`O modelo do carro é ${this.modelo}`)
    }
}

let car2 = new car("civic" , "honda" , 2014 , false);
let car3 = new car("corola" , "toyota" , 2010 , true);