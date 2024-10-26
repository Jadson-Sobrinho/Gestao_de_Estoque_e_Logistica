const pool = require('../../../config/connection');

module.exports = async function(req, res){
    let conn;
    try{
        const obj = {
            bigValue: BigInt(123456789012345678901234567890)

        };
        const serialized = JSON.stringify(obj, (key, value) =>
            typeof value === 'bigint' ? value.toString(): value
        
        );

        const cnpj = String(req.body.CNPJ);

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