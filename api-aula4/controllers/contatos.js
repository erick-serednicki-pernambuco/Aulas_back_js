
const contatos = [
    {
        id:1,
        nome: "Fulano",
        fone: "88888-88888"
    },
    {
        id:2,
        nome: "Tiotano",
        fone: "88888-88888"
    }
]

function listar(req, res, next){
    res.json(contatos);
}

function localizar(req, res, next){
    const contatoLocalizado = contatos.find(contato => contato.id === Number(req.params.id));
    if(!contatoLocalizado)
    {
        return res.status(404).json({msg:"Não encontrado"});
    }
    res.json(contatoLocalizado);  
}

function criar(req, res, next){
    
    const novoContato ={
        id: contatos[contatos.length-1].id+1,
        nome: req.body.nome,
        fone: req.body.fone,
    }

    contatos.push(novoContato);
    res.status(201).json(novoContato);
}

function atualizar(req, res, next){
    const contatoLocalizado = contatos.find(contato => contato.id === Number(req.params.id));
    if(!contatoLocalizado)
    {
        return res.status(404).json({msg:"Não encontrado"});
    }

    contatoLocalizado.nome = req.body.nome;
    contatoLocalizado.fone = req.body.fone;
    res.status(204).end();
}

function deletar(req, res, next){
    const localizado = contatos.findIndex(contato => contato.id === Number(req.params.id));
    if(localizado < 0){
        return res.status(404).json("Não Localizado");
    }
    contatos.splice(localizado, 1);
    
    res.status(204).end();  

}

module.exports = {listar, localizar, criar, atualizar, deletar};