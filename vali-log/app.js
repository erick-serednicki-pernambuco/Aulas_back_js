const express = require('express');
const mogoose = require('mongoose');
const config = require('./config/env.json');

const userRouter = require('./routes/userRouter');
const produto = require('./routes/produtoRouter');

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/produto', produto);

mogoose .connect(config.url)
    .then(app.listen(config.porta,() => {
        console.log("API esta ON!");
    }))
    .catch( erro => {
        console.log('Deu ruim', erro.message);
    });