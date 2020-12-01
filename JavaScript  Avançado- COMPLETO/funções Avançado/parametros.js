// quando é definido por function tem uma variavel chamada "arguments" que sustenta todos argumentos 
// function funcao() {
//     let total = 0;
//     for ( let argumento of arguments) {
//         total += argumento
//     }

//     console.log(total)
// }

// funcao(1, 2, 3, 4, 5, 6, 7)

// function funcao(a, b = 2, c =4, d, e, f) {
//     // console.log(a, b, c, d, e, f)
//     // b = b || 0; // forma antiga
//     console.log(a + b + c);
// }
// //somente utilizando o undefined para utilizar o valor padrao 
// funcao(2, undefined, 10)

//também pode ser desestruturado com arrays
// function funcao({ nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade)
// }
// let obj = {nome: 'matheus' ,
//         sobrenome: 'souza',
//         idade:"22"
// }

// funcao(obj)

function conta(operador, acumulador, ...numeros) {
    // console.timeLog(operador, acumulador, numeros)
    //of pega os numeros , in pega os indices
    for(let numero of numeros) {
        if(operador === '+')acumulador += numero;
        if(operador === '-')acumulador -= numero;
    }
    console.log(acumulador)
}

conta('+', 0, 20, 30, 40 ,50)