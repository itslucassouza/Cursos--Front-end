const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    if(req.session.user) return res.render('login-logado')
    res.render('login')
};

exports.register = async function(req, res) {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.sessions.save(function () {
               return res.redirect('back')
            });
            return;
        }
        req.flash('success', 'usuario criado com sucesso.');
        req.sessions.save(function () {
            res.redorect('back');
        });
    } catch (e) {
        console.log(e)
        return res.render('404')
    }

};

exports.login = async function(req, res) {
    try {
        const login = new Login(req.body);
        await login.login();

        if (!login.user) {
            req.flash('errors', login.errors);
            req.sessions.save(function () {
               return res.redirect('back')
            });
            return;
        }

        req.flash('success', 'você entrou no sistema.');
        req.session.user = login.user;
        req.sessions.save(function () {
            res.redorect('back');
        });
    } catch (e) {
        console.log(e)
        return res.render('404')
    }

};

exports.logout = function(req, res) {
    req.session.destroy();
    res.redirect('/');
};