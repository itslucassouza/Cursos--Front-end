//padrão para encontrar coisas
//g - global (encontra todas as ocorrencias)
//i - insensitive
// ()


const texto = require('./base');
const regExp1 = /joao/gi;
const found = regExp1.exec(texto);

console.log()

// console.log(regExp1.test(texto));