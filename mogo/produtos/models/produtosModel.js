async function criarPrdoduto(novoProduto){
    const novoProduto = await getDB()
                                .collection('produto')
                                .insertOne({novoProduto});
    return novoProduto;
};

async function deletarPrdoduto(novoProduto){
    const produto = await getDB()
                                .collection('produto')
                                .deleteOne({produto});
};

module.exports = {criarPrdoduto, deletarPrdoduto};