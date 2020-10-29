const porta = 3003

const express = require('express')
const app = express()

//o use atende em qualquer url que coloque 
app.use('/produtos', (req, res, next)=> {
    console.log('Middleware 1...')
    next()
})

app.get('/produtos', (req, res, next)=> {
    res.send({ nome: 'notebook', preco: 123.45}) //vai converter para JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})