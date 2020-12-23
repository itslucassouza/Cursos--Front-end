// let nomes = ['Matheus', 'Lucas', 'Henrique'];

// nomes.some(nomes => nome === 'Matheus');

// console.log(nomes.some(nome => nome === 'Maria'));


//******************************************* */


//every também devovler um callback
let nomes = [
    {nome: 'Lucas', idade: 19},
    {nome: 'maria', idade: 16},
    {nome: 'henrique', idade: 15},
]

nomes.every(nome => nome.idade >= 18);

if(nomes.every(nome => nome.idade >=18)){
    console.log('Todos São maiores de 18')
}else{
    console.log('OPS alguem é de menor')
}