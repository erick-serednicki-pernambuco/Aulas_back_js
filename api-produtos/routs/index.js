const express =require('express');

const router = express.Router();
module.export = router;


router.get('/', (req, res, next) => {
   
    res.json("Api de Produtos");
    res.status(200).end;
});



