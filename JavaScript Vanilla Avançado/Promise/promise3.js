//desestruturação

function geraNumeroEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max]
        
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(math.random * (max - min + 1))
        resolve(7)
    })
}

geraNumeroEntre(10, 30).then(console.log)