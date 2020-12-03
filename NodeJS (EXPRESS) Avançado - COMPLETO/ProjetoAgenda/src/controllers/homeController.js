const Contato = require('../models/ContatoModel')

exports.index = (req, res) => {
  const contatos =  Contato.buscaContatos();
  res.render('index', {contatos})
};

