// //tratando erros 

// //tentar
// try{
//     console.log(nãoexisto)
// }
// //caso tenha erro cai no bloco catch
// catch(erro) {
//     console.log('Não existe')
//     //recebe o erro
//     console.log(erro)
// }


function soma (x, y) {
    if(typeof x != 'number' || 
        typeof y != 'number'
    ){
        // funções construtora criando um novo erro que vai ser utilizado no catch
        throw new Error('x e y precisam ser numeros')
    }

    return x + y
}

try {
    console.log(soma(1, 2))
    console.log(soma('1', 2))
}

catch(error) {
    console.log(error)
}