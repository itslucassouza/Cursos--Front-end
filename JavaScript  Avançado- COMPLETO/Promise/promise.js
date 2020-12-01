//Promessa 

let a = 1 

//prometendo que vai entregar o "3"
//caso queira mais de um valor na promessa, precisa utilizar um objeto  
let p = new Promise(function(resolve) {
    cumprirPromessa({ 'ana', 'bia', 'gabriel'})
})

//pode se utilizar as functions na hora de receber a promessa
function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(strign){
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

//Para acessar a promessa se utiliza o .then (pode se utilizar arrow function)
p   .then(valor => valor[0]) 
p   .then(primeiro => primeiro[0]) 
p   .then(letra => letra.toLowerCase()) 
p   .then(console.log(letraMinuscula)) 

//nota-se que um resultado do metodo vai passando para o outro
