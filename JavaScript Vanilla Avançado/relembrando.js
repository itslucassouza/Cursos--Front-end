//variaveis
{
    let b = 2 // escopo de bloco 
    var a = 3 // escopo global 
    console.log(b)
}

//template string 

// `${}`

//destructuring 
 const [l, e, ...tras] = 'coder'
console.log(l,e, tras)

const [x, ,y] = [1, 2];
console.log(x, y)

const {idades,  nome } = { nome: 'ana' , idade: 9}

//arrow function => 

const soma = (a, b) => a + b
console.log(soma(2,3))

//arrow fuction (this)
const lexico1 = () => console.log(this === exports)

//ES8 Object.values (faz um array com os valores) e Object.entries (faz um array de arrays com chave e valor)

const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na  notação Literal 

const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return "Oi gente!"
    }
}
console.log(pessoa.nome, pessoa.ola())

// class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au Au!'
    }
} 

console.log(new Cachorro().falar())