const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
    nome: {type: String, required: [true, 'Campo obrigatório']},
    fone: String,


},{
    timestamps: true
});

module.exports = mongoose.model('Contato', contatoSchema);