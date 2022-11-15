const {objectIs} = require('express');
const model = import('../models/produtosModel');

async function listarProdutos(req,res){
    res.json(await produtosMode.listar());
};

async function listarProdutoPorId(req, res){
    if(!model.listarPorId(req.params.id)){
        return res.status(404).json(msg:'produto não encontrado!');
    }
    res.json(await model.listarPorId(req.params.id));
}

async function criarPrdoduto(req,res){
    res.json(await  model.criarPrdoduto(req.body.nome, req.body.valor));
}

async function listarProdutoPorId(req, res){
    if(!model.listarPorId(req.params.id)){
        return res.status(404).json(msg:'produto não encontrado!');
    }
    res.json(await model.deletarPrdoduto(req.params.id));
}