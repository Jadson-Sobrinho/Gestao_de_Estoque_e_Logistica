const pool = require('../../../config/connection');
const { validarProdutoCriacao, validarProdutoAtualizacao } = require('../../validators/produtoValidator');

module.exports = async function(req, res){
    const novo_produto = {
        nome_produto: req.body.nome_produto,
        descricao: req.body.descricao,
        nome_marca: req.body.nome_marca,
        nome_categoria: req.body.nome_categoria,
        preco_custo: req.body.preco_custo,
        preco_venda: req.body.preco_venda,
        codigo_barra: req.body.codigo_barra
        

    };

    const {error} = validarProdutoCriacao(req.body);

    if(error){ return res.status(400).json({erros: error.details})};
    
    let conn;
    try{
        conn = await pool.getConnection();

        const result = await conn.query("CALL cadastrar_produto(?, ?, ?, ?, ?, ?, ?)",
            [
                novo_produto.nome_produto,
                novo_produto.descricao,
                novo_produto.nome_marca,
                novo_produto.nome_categoria,
                novo_produto.preco_custo,
                novo_produto.preco_venda,
                novo_produto.codigo_barra,
            ]
        );
        res.status(200).json({message: 'Produto cadastrado!'})
    }catch(erro){
        res.status(500).send("Erro ao cadastrar produto" + erro.message)
    }finally{
        if (conn) conn.end();
    }
};