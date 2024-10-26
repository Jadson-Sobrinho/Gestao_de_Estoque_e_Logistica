const pool = require('../../database/connection');

module.exports = async function(req, res){
    let conn;
    try{
        conn = await pool.getConnection();
        
        const produto_id = req.body.produto_id;

        const result = await conn.query("DELETE FROM tb_produto WHERE produto_id = ?", [produto_id]);
        res.json({
            message: "Produto deletado com sucesso",
            affectedRows: result.affectedRows
        
        });
        

    }catch(erro){
        res.status(500).send('Erro ao excluir o produto' + erro.message);
    }finally{
        if (conn) conn.end();
    }
};