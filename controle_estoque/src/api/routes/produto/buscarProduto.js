const pool = require('../../database/connection');


module.exports = async function (req, res) {
    let conn;
    try{
        conn = await pool.getConnection();
        const nome_produto = req.body.nome_produto;
        const result = await conn.query("SELECT * FROM vw_produto_info WHERE nome_produto = ?;", [nome_produto]);
        res.json(result);
    }catch (erro){
        res.status(500).send("Erro ao acessar o banco " + erro.message);
    }finally {
        if(conn) conn.end();
    }
};