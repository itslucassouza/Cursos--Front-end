const { texto } = require('./base');
const regExp1 = /João/gi;


console.log(texto.match(regExp1));
console.log(texto.replace(/(joão|maria)/ig, function(input) {
    return input.toUpperCase();
}));