

//quando é utilizado spread, ele deixa 
// const outraCoisa = { ...produto };
// const caneca = Object.assign({}, produto, { material: 'porcelana'} );

/**
 * Object.keys ( retorna as chaves)
 * Object.values ( retorna os valores)
 * Object.entries (retorna chave e valor)
 *  * Object.freeza(congela o objeto)
 * Object.defineProperties (define várias propriedades)
 * Object.defineProperty ( define uma propriedade)
 * getOwnPropertyDescriptor (obj, 'propriedade') verifica as property
 */

//desestruturação 
    const produto = {nome: 'Caneca', preco:1.8 };

    for(let [chave, valor] of Object.entries(produto)) {
        console.log(chave, valor)
    }