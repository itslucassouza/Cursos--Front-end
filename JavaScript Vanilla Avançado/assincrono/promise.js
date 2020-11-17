function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('estou aqui', rand(1, 3))

.then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 2', rand(1, 3))
})

.then(resposta => {
    return resposta + 'vai para outro then';
})
.then(resposta => {
    console.log(resposta);
})
.catch()

console.log(esperaAi)