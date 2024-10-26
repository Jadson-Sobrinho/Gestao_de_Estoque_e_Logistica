const pool = require('../../database/connection');


module.exports = async function (req, res) {
    let conn;
    try{
        conn = await pool.getConnection();
        const result = await conn.query("SELECT * FROM vw_fornecedor_info;");
        res.json(result);
    }catch (erro){
        res.status(500).send("Erro ao acessar o banco " + erro.message);
    }finally {
        if(conn) conn.end();
    }
};