const pool = require('../../../config/connection');


module.exports = async function (req, res) {
    
    const nome_produto = req.body.nome_produto;

    const validator = (value) => value === undefined || value === null || value === '';

    if(validator(nome_produto)){
        return res.status(400).json({Erro: 'Insira um dado valido'});
    }

    let conn;
    try{
        conn = await pool.getConnection();
        const result = await conn.query("SELECT * FROM vw_produto_info WHERE nome_produto = ?;", [nome_produto]);
        res.json(result);
    }catch (erro){
        res.status(500).send("Erro ao acessar o banco " + erro.message);
    }finally {
        if(conn) conn.end();
    }
};