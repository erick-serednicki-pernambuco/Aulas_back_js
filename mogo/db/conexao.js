const {MongoClient} = require('mongodb');

const stringConexao ='mongodb+srv://erick:2Z0x5F1ez5P824jM@cluster0.j0jgb9v.mongodb.net/?retryWrites=true&w=majority'

const databaseName = 'meuBanco';

let db;

function conectDB(callBack) {
    MongoClient.connect(stringConexao)
    .then(client => {
        console.log('Conectado ao MongoDB!');
        db = client.db(databaseName); 
        callBack() ;
    })
    .catch(error => console.log('Não conectado!'));
}

function getDB(){

    return db;
}

module.exports = {conectDB, getDB}