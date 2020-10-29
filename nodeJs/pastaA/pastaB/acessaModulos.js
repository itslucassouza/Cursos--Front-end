// sempre respeitar as letras maiusculas e minusculas
const moduloA = require('../../moduloA')

//caminho absoluto não é uma boa pratica
// const moduloA = require('C:\Users\Usuario\Desktop\Cursos\nodeJs\moduloA.js')
console.log(moduloA.ola)


//existem modulos que ja existem no node , como HTTP
const http = require('http')
http.createServer((req, resp) => {
    resp.write('bom dia!')
    resp.end()
}).listen(8080)