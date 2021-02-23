const express = require('express')
const app = express();
const server = require('http').Server(app);

app.get('/', (req, res) => {
    // res.status(200).send("Hello World")
    res.render('room');
})

server.listen(3030);