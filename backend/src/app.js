// create server
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.get('/', (req,res)=> {
    res.send("Hello World")
})

module.exports = app;