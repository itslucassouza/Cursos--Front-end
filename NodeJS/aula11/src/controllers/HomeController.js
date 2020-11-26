exports.paginaInicial = (req, res) => {
    // req.session.usuario = { nome: 'Lucas', logado: true }
    res.render('index', {
        titulo: 'variavel local'
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};