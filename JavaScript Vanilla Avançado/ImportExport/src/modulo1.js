const nome = 'luiz';
// const sobrenome =
const idade = 30;

function soma(x, y) {
    return x + y;
}

export { nome, idade, soma };

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}