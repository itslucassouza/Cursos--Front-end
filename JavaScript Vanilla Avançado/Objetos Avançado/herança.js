//camiseta, caneca, lapis
//possibilidade de aumento e desconto 
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}


//passando um produto construtor e utilizando a outra função constrtutora
function Camiseta(nome, preco, cor) {
    //No caso, o this será o objeto criado, então é o this e os parametros da outra function
    Produto.call(this, nome, preco)
}

//passando o prototype de Produto para o prototype de Camiseta
camiseta.prototype = Object.create(Produto.prototype)

//trazendo novamente o contructor para dentro do prototype
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('regata', 7.5, 'preta');
