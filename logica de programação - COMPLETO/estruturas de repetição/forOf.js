
const nome = ['lucas', 'souza']

//for classic
// for(let i = 0; i < nome.length; i++){
//     console.log(nome[i])
// }


//for In retorna o indice ou chaves
// for(let i in nome) {
//     console.log(nome[i])
// }


//forOf retorna direto os valores, sem que precise passar o indice (não funciona com objetos)
for (let valor of nome){
    console.log(valor)
}



//function forEach recebe como parametro o valor e o indice ecaso precise tambem o array
nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
})