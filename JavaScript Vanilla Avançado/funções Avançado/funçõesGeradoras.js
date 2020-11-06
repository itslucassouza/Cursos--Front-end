// function* geradora1() {
//     // Códio qualquer...
//     yield 'Valor 1'

//     yield 'valor 2'

//     yield 'valor 3'
// }

// const g1 = geradora1();

// //cada vez que chama essa função ela passa um "yield"
// console.log(g1.next())


// gerador infinito 

// function* geradora2() {
//     let i = 0;

//     while(true) {
//         yield i;
//         i++;
//     }
// }

// const g2 = geradora2();
// console.log(g2.next().value)


function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4 () {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4) {
    console.log(valor)
}