const { response } = require('express');
const express = require('express');
const app = express();

//crud 
//criar , ler, atualizar, deletar
//create, read, update, delete 
// post,   get,  put,   delete


app.get('/', (req, res) => {
    response.send('Hello World!')
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor Executando na porta 3000')
})