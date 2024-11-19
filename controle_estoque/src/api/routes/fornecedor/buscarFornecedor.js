const pool = require('../../../config/connection');


module.exports = async function (req, res) {
    
    
    const validator = (value) => value === undefined || value === null || value === '';

    
    let conn;
    try{
        const cnpj = req.body.CNPJ;

        if(validator(cnpj)){
            return res.status(400).json({Erro: 'Insira um dado valido'});
         }
        else {
            conn = await pool.getConnection();
            const result = await conn.query("SELECT * FROM vw_fornecedor_info WHERE CNPJ = ?;", [cnpj]);
            res.setHeader('Content-type', 'application/json');
            res.send(JSON.stringify(result, null, 2));
        }

    }catch (erro){
        res.status(500).send("Erro ao acessar o banco " + erro.message);
    }finally {
        if(conn) conn.end();
    }
};