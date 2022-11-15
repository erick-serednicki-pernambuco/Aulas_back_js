const express = require("express");
const controller = require("../controllers/contatosController");
const router = express.Router();

// endpoint: /contatos
// GET: Listar contatos
router.get("/", controller.listar);

// endpoint: /contatos/3
// GET: Listar um contato por id
router.get("/:id", controller.listarId);

// endpoint: /contatos
// POST: Cadastrar novo contato
router.post("/", controller.criar);

// endpoint: /contatos/id
// PUT: Editar um contato por id
router.put("/:id", controller.editar);

// endpoint: /contatos/id
// DELETE: Deletar um contato por id
router.delete("/:id", controller.deletar);

module.exports = router;
