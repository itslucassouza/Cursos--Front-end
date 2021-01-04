const lista = [1,2,3,4,5,6];

const novaLista = lista.map(function(item, index) {
    console.log(item + index);
    return item * 5;
})


const soma = lista.reduce(function(total, proximo) {
    return total + proximo;
})


//find 
const find = lista.find(function(item){
    return item === 6;
})