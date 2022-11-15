const express = require('express');
const { ObjectId } = require('mongodb');

const {getDB, conectDB} = require ('./db/conexao');

const app = express();

app.use(express.json());

app.get('/contatos',async function(req, res){
    const contatos = await getDB()
                    .collection('contatos')
                    .find({}).toArray();
    res.json(contatos);
});

app.get('/contatos/:id',async function(req, res){
    const contato = await getDB()
                    .collection('contatos')
                    .findOne(
                        {_id: ObjectId(req.params.id)},
                    );
    res.json(contato);
});

app.post('/contatos',async function(req, res){
    const {insertedId} = await getDB()
                    .collection('contatos')
                    .insertOne(req.body);

    res.status(201);
});

app.put('/contatos/:id',async function(req, res){
    await getDB()
            .collection('contatos')
            .updateOne(
                {_id: ObjectId(req.params.id)},
                {$set:req.body}
            );
    res.status(204).end();
});

app.delete('/contatos/:id',async function(req, res){
    await getDB()
            .collection('contatos')
            .deleteOne(
                {_id: ObjectId(req.params.id)},
            );
    res.status(204).end();
});

conectDB(() =>
    app.listen(3000,() => console.log("API esta ON!"))
);


