const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        { extended: true}
    )
);

app.listen(3000)

app.get('/', (req, res) => {
    res.send(req.params)
})

app.post('/', (req, res) => {
    res.send(req.params)
    console.log(req.params)
})

