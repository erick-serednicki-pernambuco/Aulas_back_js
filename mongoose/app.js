const express = require("express");
const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const Contato = require("./models/contatosModel");

const url =
    "mongodb+srv://erick:EL8eVsdcDSPh3jFo@cluster0.pqkdvwv.mongodb.net/contatos?retryWrites=true&w=majority";

mongoose
    .connect(url)
    .then(console.log("Conectou no Mongo"))
    .catch((erro) => console.log("Deu ruim!", erro));

async function crud() {

    //inserir
    const novoContato = new Contato({ nome: "Erick", fone: "88888-8888" });

    await novoContato.save().catch((erro) => console.log(erro));
    console.log(novoContato);

    //sort({nome: 1}) sort 1 =  crescente -1 = decrescente -- limit(10) = qtd

    //listar
    await Contato.find({})
        .then((listaContatos) => console.log(listaContatos))
        .catch((erro) => console.log(erro));

    //consultar por id
    await Contato.findOne({ _id: novoContato._id })
        .then((contato) => console.log(contato))
        .catch((erro) => console.log(erro));

    //alterar
    await Contato.updateOne({ _id: novoContato._id }, { nome: "Mariana" })
        .then(console.log("alterou"))
        .catch((erro) => console.log(erro));

    //deletar
    await Contato.deleteOne({ _id: novoContato._id })
        .then((contato) => console.log(contato))
        .catch((erro) => console.log(erro));
}
