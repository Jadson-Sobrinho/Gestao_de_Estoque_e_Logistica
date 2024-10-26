const pool = require('../../../config/connection');

module.exports = async function(req, res){
    let conn;
    const nome_marca = req.body.nome_marca;
    try{
        conn = await pool.getConnection();
        const result = await conn.query('SELECT * FROM vw_marca_quantidade_produtos WHERE nome_marca = ?;', [nome_marca]);
        res.json(result);
    }catch(erro){
        res.status(500).send('Erro ao acessar o banco' + erro.message);
    }finally{
        if(conn) conn.end();
    }
}