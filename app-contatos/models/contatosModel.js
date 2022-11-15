// Dados
const contatos = ["Daniel", "Kelly", "Jessica", "Marcos"];

const listar = () =>{
    return [...contatos];
};

const listarId = (id) => {
    return contatos[id];
};

const criar = (novo) => {
    contatos.push(novo);
    return {id : contatos.length-1, nome: novo};
};

const editar = (id, nome) => {
    contatos[id] = nome;
    return contatos[id];
};

const deletar = (id) => {
    contatos.splice(id,1);
    return {id: id};
};

module.exports = { listar, listarId, criar, editar, deletar };
