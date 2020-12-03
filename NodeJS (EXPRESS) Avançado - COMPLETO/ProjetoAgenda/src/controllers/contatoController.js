const { async } = require('regenerator-runtime');
const Contato = require('../models/ContatoModel');
const contato = require('../models/ContatoModel');


exports.index = (req, res) => {
    res.render('contato', {
        contato: {}
    });
}

exports.register = async (req, res) => {
    try{
        const contato = new Contato(req.body);
        await contato.register();
        
        if(contato.errors.lenght > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('back'));
            return;
        }
    
        req.flash('success', 'contato registrado com sucesso');
            req.session.save(() => res.redirect(`/cotnato/index/${contato.contato._id}`));
            return;
    } catch(e) {
        console.log(e)
    }
};

exports.editIndex = async(req, res) => {
    if(!req.params.id) return res.render('404');
    const contato = await Contato.buscaPorId(req.params.id)
    if(!contato)return res.render('404');

    res.render('contato', { contato });
};

exports.edit = async function(req, res) {
    try {
        if(!req.params.id) return res.render('404');
        const contato = new contato(req.body);
        await contato.edit(req.params.id);
    
        if(contato.errors.lenght > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('back'));
            return;
        }
    
        req.flash('success', 'contato editado com sucesso');
            req.session.save(() => res.redirect(`/cotnato/index/${contato.contato._id}`));
            return;
    }catch(e) {
        res.render('404')
    }
   
};

exports.delete = async function(req, res) {
    if(!req.params.id) return res.render('404');

    const contato = await Contato.delete(req.params.id);
    if(!contato) return res.render('404');

    req.flash('success', 'Contato apagado com sucesso.');
    req.session.save(() => res.redirect('back'));
    return
}