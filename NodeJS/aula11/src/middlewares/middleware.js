exports.middlewareGlobal = (req, res, next) => {
    res.local.umaVariavelLocal = 'este é o valor da Local';
    next();
};

exports.outroMiddleware = (req,res,next) => {
    next();
}