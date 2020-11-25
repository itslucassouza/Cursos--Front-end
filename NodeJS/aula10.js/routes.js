const express = require('express')
const route = express.Router();
const contatoController = require('./src/controllers/contatoController')
const homeController = require('./src/controllers/HomeController')

function meuMiddleware(req, res, next) {
    console.log('')
    console.log('passei pelo seu middleware')
    next();
}

//Rotas home
route.get('/', homeController.paginaInicial, function(req,res,next) {
    
})
route.post('/', homeController.trataPost)

//Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;