//Arquivo fileSistem
const fs = require('fs')
const { config } = require('process')
const caminho = __dirname + '/arquivo.json'

// sincrono..
//readFileSync = leia o arquivo de forma sincrona 
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assim a aplicação nao vai ficar presa no sincronismo, sempre tem q especificar o encouding
//assincrono..
//json.parse transforma em um  objeto, para que seja acessado seus atributos
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

//readdir = leia o diretório
fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteudo da pasta')
    console.log(arquivos)
})