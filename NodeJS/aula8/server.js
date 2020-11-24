const express = require('express');
const route = require('./routes');
const app = express();
const routes = require('./routes');


app.use(express.urlencoded({ extended: true}));
app.use(routes);


app.listen(3000, () => {
    console.log('Servidor iniciado')
})