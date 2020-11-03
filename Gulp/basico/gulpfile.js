const gulp = require('gulp')
// tem duas formas de pegar, desestruturando ou arquivando em uma variavel
const { series, parallel } = require('gulp')
// const series = gulp.series

const antes1 = cb => {
    console.log('tarefa antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('tarefa antes 2!')
    return cb()
}

function copiar(cb) {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    //transformação
    .pipe(gulp.dest('pastaB'))
    return cb()
}

//executa de forma sequencial 
module.exports.default = series(
    parallel(antes1, antes2),
    copiar)
