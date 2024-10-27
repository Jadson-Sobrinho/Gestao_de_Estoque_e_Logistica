const pool = require('../../../config/connection');

module.exports = async function(req, res){
    
    const produto_id = req.body.produto_id;

    const validator = (value) => value === undefined || value === null || value === '' || isNaN(Number(value));

    if(validator(produto_id)){
        return res.status(400).json({Erro: 'Insira um valor valido'})
    }
    
    let conn;
    try{
        conn = await pool.getConnection();
        
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