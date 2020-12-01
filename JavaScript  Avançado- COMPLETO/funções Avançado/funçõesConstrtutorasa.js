// funções constrturoras e funções fabricas sempre fazem objetos
//construtora > sempre começa com letra maiuscula e utiliza o new

function Pessoa(nome, sobrenome) {
    //atributos ou metodos privados
    const ID = 123456;
    const metodoInterno = function(){

    };

    //atributos ou metodos publicos 
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um metodo')
    }
}


//nao pode esquecer de usar a palavra new
const p1 = new Pessoa('luiz', 'Otavio');

console.log(p1);
