const { sienna } = require("color-name");

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
         console.log(this.nome + 'ja ligado')
            return
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + 'Já desligado')
            return
        }

        this.ligado = false;
    }
}

//herdando 
class Smartphone extends DispositivoEletronico {
    //chamar o super para construtor
    constructor(nome, cor, modelo) {
        super(nome);

        //atribuindo novos metodos depois de chamas os metodos do constrtuctor pai 
        this.cor = cor;
        this.modelo = modelo;
    }


    //alterando o metodo ligar
    ligar() {
        console.log('Você alterou o método ligar.')
    }
}

const s1 = new Smartphone('iphone');
s1.ligar()
