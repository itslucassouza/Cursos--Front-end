//return
//return
//retorna uma função
//termina a função 

// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red'
// })

// function soma( a, b ) {
//     return a + b
// }

// function soma2(a, b) {
//     console.log(a + b)
// }

// soma2(5, 2);

// function criaPessoa( nome, Sobrenome) {
//     return{ nome, sobrenome };
// }

// const p1 = criaPessoa('luiz', 'Otavio');
// const p2 = {
//     nome: 'joão',
//     sobrenome: 'oliveira'
// }

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + '' + resto;
    }

    return falaResto;
}

const olaMundo = falaFrase('olá')


function criaMultiplicador(multiplicador) {
    // multiplicador
    return function (n) {
        return n * multiplicador
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4)

console.log(duplica(6))
console.log(triplica(2))
console.log(quadriplica(2))

