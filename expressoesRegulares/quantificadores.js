const { texto, arquivos } = require('./base');
// * (opcionais) o ou n
// + (obrigatorio) 1 ou n
// ? (opcionais) o ou 1
// \ caractere de escape
// {n,m} min e max
//{10,} no minimo 10
//{,10} de 0 a 10 
// {5,10} de 5 a 10


// const regExp1 = /jo+ão+/gi
// console.log(texto.match(regExp1));


const regExp2 = /\.(jpeg|jpg) jpe?g/gi

for(const arquivo of arquivos) {
    console.log(arquivo.match(regExp2))
}