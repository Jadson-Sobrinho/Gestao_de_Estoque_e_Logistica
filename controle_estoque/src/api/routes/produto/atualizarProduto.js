const pool = require('../../../config/connection');
const { validarProdutoCriacao, validarProdutoAtualizacao } = require('../../validators/produtoValidator');


module.exports = async function(req, res){
    
    const atualizar_produto = {

        produto_id: req.body.produto_id,
        nome_produto: req.body.nome_produto,
        descricao: req.body.descricao,
        nome_marca: req.body.nome_marca,
        nome_categoria: req.body.nome_categoria,
        preco_custo: req.body.preco_custo,
        preco_venda: req.body.preco_venda,
        codigo_barra: req.body.codigo_barra
        

    };

    const {error} = validarProdutoAtualizacao(req.body);

    if (error){ return res.status(400).json({erros: error.details})};
    
    let conn;
    try{
        conn = await pool.getConnection();

        const result = await conn.query('CALL Update_produto_info(?, ?, ?, ?, ?, ?, ?, ?);',
            [
                atualizar_produto.produto_id,
                atualizar_produto.nome_produto,
                atualizar_produto.descricao,
                atualizar_produto.nome_marca,
                atualizar_produto.nome_categoria,
                atualizar_produto.preco_custo,
                atualizar_produto.preco_venda,
                atualizar_produto.codigo_barra
                
            ]

        );

        res.status(200).json({
            message: "Produto atualizado com sucesso",
            affectedRows: result.affectedRows
        
        });
    }catch(erro){
        res.status(500).send("Erro ao acessar o banco" + erro.message);

    }finally{
        if(conn) conn.end();
    }
};