//O this é uma referencia para module.exports 

console.log(module.exports === this)

//
console.log(module.exports === exports)

//essas são as formas de deixar algo visivel fora do arquivo 
this.a =1 
exports.b = 2
module.exports = 3

exports = null
console.log(module.exports.toFixed)

//^ permite que apenas o segundo parametro vai ser atualizado 
//~ permite que apenas o ultimo parametro seja atualizado
