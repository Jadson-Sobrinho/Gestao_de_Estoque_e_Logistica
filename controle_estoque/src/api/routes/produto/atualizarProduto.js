const e = require('express');
const pool = require('../../database/connection');


module.exports = async function(req, res){
    let conn;
    try{
        const atualizar_produto = {

            produto_id: req.body.produto_id,
            nome_produto: req.body.nome_produto,
            nome_marca: req.body.nome_marca,
            nome_categoria: req.body.nome_categoria,
            preco_custo: req.body.preco_custo,
            preco_venda: req.body.preco_venda,
            quantidade: req.body.quantidade,
            codigo_barra: req.body.codigo_barra,
            descricao: req.body.descricao

        };

        conn = await pool.getConnection();

        const result = await conn.query('CALL Update_produto_info(?, ?, ?, ?, ?, ?, ?, ?, ?);',
            [
                atualizar_produto.produto_id,
                atualizar_produto.nome_produto,
                atualizar_produto.descricao,
                atualizar_produto.nome_marca,
                atualizar_produto.nome_categoria,
                atualizar_produto.preco_custo,
                atualizar_produto.preco_venda,
                atualizar_produto.quantidade,
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