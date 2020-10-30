
//                  0    1       2
const frutas = ['pera','maça', 'uva']

// no for classico seria assim
// for(i = 0; i < frutas.length; i++)
// console.log(frutas[i])


//for in lê o indice dos objetos
for (let indice in frutas) {
    console.log(frutas[indice])
}

const pessoa = {
    nome: 'luiz',
    sobrenome: 'otavio',
    idade: 30
}

console.log(pessoa['nome'])


for (let chave in pessoa){
    //          pegando a chave - pegando o valor doa chave dentro de pessoa
    console.log(chave, pessoa[chave])
}