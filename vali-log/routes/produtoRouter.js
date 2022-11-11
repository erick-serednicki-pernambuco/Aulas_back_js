const express = require('express');
const autenticar = require("../middlewares/authMiddleware")

const router = express.Router();

router.post('/', autenticar, function(req,res){
    res.json({msg:"Deu certo", id : req.body.id});
})

module.exports = router;