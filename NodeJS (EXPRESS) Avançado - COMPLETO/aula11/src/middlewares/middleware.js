exports.middlewareGlobal = (req, res, next) => {
    res.local.umaVariavelLocal = 'este é o valor da Local';
    next();
};

exports.outroMiddleware = (req,res,next) => {
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.send('bad CSRF.')
    }
}

exports.csrfMiddleware = (req,res,next) => {
    res.locals.csrfToken = req.csrfToken();
    next()
}