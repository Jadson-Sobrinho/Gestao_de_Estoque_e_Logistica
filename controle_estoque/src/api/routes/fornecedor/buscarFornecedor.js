const pool = require('../../database/connection');


module.exports = async function (req, res) {
    let conn;
    try{
        conn = await pool.getConnection();
        const cnpj = req.body.CNPJ;
        const result = await conn.query("SELECT * FROM vw_fornecedor_info WHERE CNPJ = ?;", [cnpj]);
        res.json(result);
    }catch (erro){
        res.status(500).send("Erro ao acessar o banco " + erro.message);
    }finally {
        if(conn) conn.end();
    }
};