const pool = require('../../../config/connection');


module.exports = async function(req, res) {
    const lote_info = {
        numero_lote: req.body.numero_lote,
        nome_marca: req.body.nome_marca,
        nome_produto: req.body.nome_produto,
        data_fabricacao: req.body.data_fabricacao,
        data_validade: req.body.data_validade,
        quantidade: req.body.quantidade


    };
    let conn;
    try{
        conn = await pool.getConnection();

        const result = await conn.query("CALL adicionar_lote(?, ?, ?, ?, ?, ?)",
            [
                lote_info.numero_lote,
                lote_info.nome_marca,
                lote_info.nome_produto,
                lote_info.data_fabricacao,
                lote_info.data_validade,
                lote_info.quantidade
            ]
        );

        res.status(201).send(JSON.stringify({message: 'Lote adicionado com sucesso'}));

    }catch(erro){
        res.status(500).send("Erro ao criar o lote " + erro.message);
    }finally{
        if(conn) conn.end();
    }
}