require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conectei a base de dados')
        app.emit('pronto')
    })
    .catch(e => console.log(e))

    const session = require('express-session');
    const MongoStore = require('connect-mongo');
    const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { Console } = require('console');
const { use } = require('./routes');


app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')))

const sessionsOptions = session({
    secret: 'sadjiosahndoiasd dqdwqe dqwdqw',
    store: new MongoStore({ mongooseConnection: mongoose.connection}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        htttpOnly: true 
    }
});
app.use(sessionsOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


//nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes)

app.use(routes);


app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor iniciado')
    })
})