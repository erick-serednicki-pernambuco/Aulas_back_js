const model = require("../models/contatosModel");

const listar = (req, res) => {
    const contatos = model.listar();
    return res.json(contatos);
};

const listarId = (req, res) => {
  const { id } = req.params;
  const contato = model.listarId(id)
  return res.json(contato);
};

const criar = (req, res) => {
  const nome = req.body.nome;
  const contato = model.criar(nome);
  return res.json(contato);
};

const editar = (req, res) => {
  const { id } = req.params;
  const nome = req.body.nome;
  const novo = model.editar(id, nome)
  return res.json(novo);
};

const deletar = (req, res) => {
  const { id } = req.params;
  const contato = model.deletar(id);
  return res.json(contato);
};

module.exports = { listar, listarId, criar, editar, deletar };
