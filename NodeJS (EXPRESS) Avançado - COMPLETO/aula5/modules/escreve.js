const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    //escrever arquivo
    fs.writeFile(caminhoArquivo, json, { flag: 'w'});
}
