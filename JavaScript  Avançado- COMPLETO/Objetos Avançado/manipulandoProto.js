//nex Objetct -> Object.prototype
function Produtos(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produtos.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};


const p1 = new Produtos('camiseta' , 50);
p1.aumento(100)

console.log(p1)

const p2 = {
    nome: 'caneca',
    preco: 15
};

Object.setPrototypeOf(p2, produto.prototype);

p2.aumento(10);

const p3 = Object.create(Object.prototype);
// const objA = {
//     chaveA: 'A'
//     //__proto__: object.prototype
// }

// const objB = {
//     chaveB: 'b'

// }

// Object.setPrototypeOf(objB, objA);
// console.log(objB, objA)