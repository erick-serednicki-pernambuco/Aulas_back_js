const express = require('express');
const createError = require('http-errors')

const app = express();

//const port = 3000



app.use(express.json()); //recebendo JSON
app.use(express.urlencoded({extended: false})); //recebendo html

app.get('/', (req, res, next) => {
    res.json({msg:"Na escuta"});
});
app.get('/:id', (req, res, next) => {
    if(Number(req.params.id) === 9999999)
    {
        return res.status(404).end();
    }
    res.json({msg:"Na escuta"});
});


app.post('/:id', (req, res, next) => {
    console.log(req.body)
    res.status(201).json({
        id: 1, contato: req.body.contato, fone: req.body.fone
    });
});


app.put('/', function(req, res, next){
    console.log(req.body)
    res.status(204).end;
});

app.delete('/', function(req, res, next){
    console.log(req.body)
    res.status(204).json({});
});

//app.listen(3000, () => {
//    console.log("API esta on!")
//});


module.exports = app;