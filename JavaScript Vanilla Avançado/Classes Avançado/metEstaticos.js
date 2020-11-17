//metodos que pode acessar a classe sem utilizar o new (sem instancia)
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    //metodo de instancia
    diminuirVolume() {
        this.volume -= 2;
    }

    //metodo estatico 
    static trocaPilha() {
        //this, é referente a ele mesmo (no caso a classe! )
        console.log('ok, vou trocar!')
    }
}

const controle1 = new ControleRemoto('lg')
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);


//não se usa a palavra new
ControleRemoto.trocaPilha()