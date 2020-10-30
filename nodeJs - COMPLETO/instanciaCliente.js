const contadorA = require('./instanciaUnica')
const contadorB  = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()


//o Valor vai see alterado pq a função está sendo executada duas vezes!
contadorA.inc()
contadorA.inc()
console.log(contadorB)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)
