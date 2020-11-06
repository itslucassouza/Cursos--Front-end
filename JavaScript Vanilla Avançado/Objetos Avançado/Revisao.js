//usando o literal
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

// Duas formas de acessar 
// console.log(pessoa['nome'])
// console.log(pessoa.nome)

const chave = 'nome';
console.log(pessoa[chave])

//usando o construtor
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'otavio';

//deletando um valor
delete pessoa1.nome;
console.log(pessoa1)


//metodos sao funções dentro do objeto que executam ações
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'otavio';
pessoa1.idade = 3
pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`)
};
pessoa1.getDataDeNasc = function () {
    //colocando a data atual dentro de um constante
    const dataAtual = new Date();

    //pegando o ano da data atual e subtraindo a idade
    return dataAtual.getFullYear() - this.idade
}
//utilizando o for in para retornar as chaves do objeto (ou os valores)
for( let chave in pessoa1) {
    console.log(chave)
    console.log(pessoa1[chave])
}

console.log(pessoa1.getDataDeNasc())