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

// esperaAi('Fase 1' , rand(0, 3))
//     .then(valor => {
//         console.log(valor)
//         return esperaAi('fase 2', rand())
//     })

async function executa() {
    try {
        const fase1 = await esperaAi('fase1', rand());
        console.log(fase1);
    
        const fase2 = await esperaAi('frase 2', rand());
        console.log(fase2);
    
        const fase3 = await esperaAi('frase 3', rand());
        console.log(fase3);
    } catch(e) {
        console.log(e)
    }
}

executa();