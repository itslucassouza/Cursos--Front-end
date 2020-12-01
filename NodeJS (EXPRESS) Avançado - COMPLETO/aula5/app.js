const path = require('path')
const escreve = require('./modules/escreve')
const caminhoArquivo = path.resolve(__dirname, 'teste.txt');
const ler = require('./modules/ler')


// const pessoas = [
//     {nome: 'João'},
//     {nome: 'maria'},
//     {nome: 'Eduardo'},
//     {nome: 'Luiza'},
// ];

// const json = JSON.stringify(pessoas, '', 2) 
// escreve(caminhoArquivo, json)

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val.nome))
}
lerArquivo(caminhoArquivo)
// const dadosArquivo = lerArquivo(caminhoArquivo);
// .then(dados => console.log(dados));