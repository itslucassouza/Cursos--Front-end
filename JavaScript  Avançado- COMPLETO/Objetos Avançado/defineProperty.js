// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        // value: estoque,    //valor
        // writable: false,    //pode alterar
        configurable: true, //configuravel
        get: function() {
            return estoque;
        }, 
        set: function(valor) {
            
        }
    });

    Object.defineProperties(this, {
        nome: {
        enumerable: true, //mostra a chave
        value: nome,    //valor
        writable: false,    //pode alterar
        configurable: false //configuravel
        },
        preco: {
        enumerable: true, //mostra a chave
        value: preco,    //valor
        writable: false,    //pode alterar
        configurable: false //configuravel
        },
    })
}

const produto = new Produto('Lucas', 28, 32)
// console.log(Object.keys(p1))
console.log(produto)