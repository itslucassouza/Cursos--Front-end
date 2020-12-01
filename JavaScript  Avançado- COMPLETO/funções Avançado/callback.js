function rand (min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + 
    min
    return Math.floor(num);
}


function f1 (callback) {
    setTimeout(function() {
        console.log('f1')
        if (callback) callback()
    }, rand())
}

function f2 (callback) {
    setTimeout(function() {
        console.log('f2')
        if (callback) callback()
    }, rand())}

function f3 (callback) {
    setTimeout(function() {
        console.log('f3')
        if (callback) callback()
    }, rand())
}

/**
 * cada função recebeu como parametro um "callback" e esse parametro retorna uma função ordenada
 * cada função também recebeu uma verificação para caso exista o callback retorna-lo
 */
f1(function() {
    f2(function() {
        f3(function() {
            console.log('olá mundo')
        })
    })
});


//melhor pratica de callback
f1(f1Callback());

function f1Callback(){
    f2(f2Callback)
}

function f2Callback() {
    f3(f3Callback)
}

function f3Callback() {
    console.log('Olá mundo')
}
