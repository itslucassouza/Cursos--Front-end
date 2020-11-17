function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

// Promise.all promise.race Promise.resolve Promise.reject 
//race (corrida) entrega a primeira q chega

const promises = [
    'primeiro valor',
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 500),
    esperaAi('promise 3', 1000),
    'outro valor'
];

//traga todas as promises
Promise.all(promises)
.then(function(valor) {
    console.log(valor)
})



