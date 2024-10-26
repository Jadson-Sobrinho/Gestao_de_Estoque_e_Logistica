const pool = require('../../../config/connection');

module.exports = async function(req, res){
    const cnpj = String(req.body.CNPJ);
    
    const validator = (value) => value === undefined || value === null || value === '' || isNaN(Number(value));

    if(validator(cnpj)){
        return res.status(400).json({Erro: 'Insira um dado valido'});
    }
    
    let conn;
    try{
        const obj = {
            bigValue: BigInt(123456789012345678901234567890)

        };
        const serialized = JSON.stringify(obj, (key, value) =>
            typeof value === 'bigint' ? value.toString(): value
        
        );

        conn = await pool.getConnection();

        const result = await conn.query("DELETE FROM tb_fornecedor WHERE CNPJ = ?", [cnpj]);
        res.json({
            message: "Fornecedor deletado com sucesso",
            affectedRows: result.affectedRows
        
        });

    }catch (erro){
        res.status(500).send("Erro ao acessar o banco " + erro.message);
    }finally {
        if(conn) conn.end();
    }
};