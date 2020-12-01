//filter > sempre retorna um array com a mesma quantidade de elementos
//ou menos

// Retorne os numeros maiores 10 
const numeros = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// function callbackFilter(valor) {
//     return valor > 10; 
// }
// methodo filter, recebe uma função de callback
//                                       forma mais comum de ser feito, utilizando uma arrow function
const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados)


// retornar pessoas com o nome maior que 5 letras
const pessoas = [
    { nome: 'Luiz', idades: 62},
    { nome: 'maria', idades: 23},
    { nome: 'eduardo', idades: 55},
    { nome: 'leticia', idades: 19},
    { nome: 'rosana', idades: 32},
    { nome: 'wallace', idades: 47}
];

// //utilizando o .lenght para ver o tamanho da string 
// const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length > 5 )
// console.log(pessoasComNomeGrande)

//retornando pessoas com mais de 50 anos
// const velhos = pessoas.filter(obj => obj.idades > 50)
// console.log(velhos)

//filtar pessoas que termina com a
// utilizando o endsWith para oegar o termina com a
const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(nomeTerminaComA)
