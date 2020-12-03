const { alfabeto } = require('./base');

// [abc] = tambem vai trazer qualquer outra sequencia
//^ negando
//[-] range sempre do menor para o maior
console.log(alfabeto)
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-k]+/g));
console.log(alfabeto.match(/[a-z]+/g));
console.log(alfabeto.match(/[^a-za-zo-9]+/g)); //negação