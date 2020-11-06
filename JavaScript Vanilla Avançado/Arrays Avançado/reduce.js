const numeros = [5, 50, 80, 1, 2, 3 ,5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador,valor) {
    if(valor % 2 === 0) acumulador.push(valor)
    acumulador += valor
}, 0);


const pessoas = [
    { nome: 'Luiz', idades: 62},
    { nome: 'maria', idades: 23},
    { nome: 'eduardo', idades: 55},
    { nome: 'leticia', idades: 19},
    { nome: 'rosana', idades: 32},
    { nome: 'wallace', idades: 47}
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idades > valor.idades) return acumulador;
    return valor
})

console.log(maisVelha)