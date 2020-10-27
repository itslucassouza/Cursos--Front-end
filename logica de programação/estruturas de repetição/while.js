//while e Do while, verifica se a cond é verdadeira 

// const nome = 'luiz'
// let i = 0;

// while (i < nome.length) {
//     console.log(nome[i])
//     i++;
// }


function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}
const min = 1;
const max =50
let rand = random(min, max);


while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

// do while checa primeiro 

do{
    rand = random(min,max)
    console.log(rand)
} while (rand !== 10);