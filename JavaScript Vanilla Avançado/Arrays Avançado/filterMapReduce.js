//Retorne a soma do dobro de todos os pares
//filtrar pares
//dobrar os valores
// reduzir (somar tudo)


const numeros = [5, 50, 80, 1, 2, 3 ,5, 8, 7, 11, 15, 22, 27]

const soma = numeros.filter(function(valor) {
    return valor % 2 === 2;
})
.map(function(valor) {
    return valor * 2;
}
.reduce(function(ac, valor){
    return ac + valor
}))

console.log(soma)


//utilizar arrowFunction