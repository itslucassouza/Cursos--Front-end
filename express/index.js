const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const saudacao = require('./saudacaomid');
const usuarioAPI = require('./API/usuario');
require('./API/produto')(app, 'com param!');

app.post('/usuario', usuarioAPI.salvar)
app.get('/usuario', usuarioAPI.obter)


app.use(bodyParser.text());
app.use(bodyParser.json());


app.use(saudacao('Lucas'))

app.get('/cliente/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.get('clientes/:id', (req, res) => {
    res.send(`cliente ${req.params.id} selecionado!`)
})

app.post('./corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(JSON.stringify(req.body))
})



app.use('opa', (req, res, next) => {
    console.log('será que serei chamado?')
    next()
});



app.use('/opa', (req, res) => {
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1},
            {id: 34, name: 'Ana', position: 2},
            {id: 73, name: 'Ana', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
})





// app.get('/fdc', (req, res) => {

// })


//retorna oq estiver dentro
    // res.send('Estou bem!')

//retorna em formato json
//também pode ser varios objetos
    // res.json({
    //     nome: 'lucas', 
    //     price: 1899.00,
    //     seila: 0.12
    // })
app.listen(3001, () => {
    console.log('servidor iniciado na porta 3000.')
});