//modulo path é padrao do node
const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');




// const p1 = new Pessoa('Luiz');
// console.log(p1)


// //import no node é com require 
// // const mod1 = require('./mod1');
// // console.log(mod1.falaNome())


// //importando apenas a função e atrelando ela a uma constante
// // const falaNome = mod1.falaNome;
// // const falaNome = require('./mod1').falaNome;

// //desestrututração
// const { nome, sobrenome, falaNome } = require('./mod1')
// console.log(falaNome())