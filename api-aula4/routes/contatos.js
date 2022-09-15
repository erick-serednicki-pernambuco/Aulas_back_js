var express = require('express');
const contatoController = require('../controllers/contatos')
var router = express.Router();



/* GET users listing. lista todos os contatos*/
router.get('/', contatoController.listar);

/*GET ID lista um contato por id */
router.get('/:id',contatoController.localizar);

/*POST cria um contato*/
router.post('/', contatoController.criar);

/*PUT atualiza um contato por id*/
router.put('/:id', contatoController.atualizar);

/*DELETE deleta um contato por id*/
router.delete('/:id',contatoController.deletar);

module.exports = router;
