const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]


//for off
for(let numero of numeros) {

    if(numero === 2 ){
        continue; //pula pra proxima e ignora essa
    }

    if (numero === 5){
        console.log('pulei o numero 5 hihi')
        continue;
    }

    //brak para o laço
    if(numero === 7){
        console.log('7 encontrado! Saindo...')
        break;
    }
    console.log(numero);
}

