const pessoa = {
    nome: "lucas",
    sobrenome: "Fraga",
    idade: 10,
    cargo: "desenvolvedor"
};

//criando uma variavel com as chaves do objeto
let { nome } = pessoa;
console.log(nome)

//criando duas variaveis do objeto
let {idade, cargo} = pessoa;
console.log(idade, cargo);

//criando a variavel com oas chaves do objeto, porém alterando o nome da chave
let { cargo: programador } = pessoa;
console.log(programador)


//Alterando valor criando do objeto
cargo = "louco";


//criando variavel de um array (é feito pelo indice)
let nomes = ["lucas", "Souza", 10]
let { 1: sobrenome } = nomes;