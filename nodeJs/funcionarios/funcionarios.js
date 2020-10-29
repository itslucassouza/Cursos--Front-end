const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


//criando uma função que verifica o Pais
const chineses = f => f.pais === 'China'

//Função que verifica o gereno
const mulheres = f => f.genero === 'F'

//função que verifica o menor salario
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}



axios.get(url).then(response => {
    const funcionarios = response.data
    
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
    
    console.log(func)
})