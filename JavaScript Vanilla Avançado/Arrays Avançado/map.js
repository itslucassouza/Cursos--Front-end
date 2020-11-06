//map
// vai sempre ter o tamanho o array original 

const numeros =[5, 50, 80, 1, 2, 3 ,5, 8, 7, 11, 15, 22, 27]

const numerosEmDobro = numeros.map(function(valor, indice, array) {
    return valor * 2;
});

//para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idades: 62},
    { nome: 'maria', idades: 23},
    { nome: 'eduardo', idades: 55},
    { nome: 'leticia', idades: 19},
    { nome: 'rosana', idades: 32},
    { nome: 'wallace', idades: 47}
];


const comIds = pesoas.map(function (obj, indice) {
    //não é uma boa praticar alterar o objeto original, quando se trabalha por referencia
    // obj.id = i(ndice + 1) * 1000;

    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
})

// const pessoasString = pessoas.map(obj => obj.nome);

// const idades = pessoas.map(function(obj) {
//     // delete obj.nome;
//     return {idade: obj.idade};
// })

