const e = require('express');
const pool = require('../../database/connection');


module.exports = async function(req, res){
    let conn;
    try{
        const atualizar_fornecedor = {

            razao_social: req.body.razao_social,
            CNPJ: req.body.CNPJ,
    
            cep: req.body.cep, 
            uf: req.body.uf, 
            cidade: req.body.cidade, 
            bairro: req.body.bairro, 
    
            numero: req.body.numero, 
    
            telefone: req.body.telefone, 
    
            email: req.body.email, 
    
            nome_marca: req.body.nome_marca
        };

        conn = await pool.getConnection();

        const result = await conn.query('CALL Update_fornecedor_info(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
            [
                atualizar_fornecedor.razao_social,
                atualizar_fornecedor.CNPJ,
    
                atualizar_fornecedor.cep, 
                atualizar_fornecedor.uf,
                atualizar_fornecedor.cidade,
                atualizar_fornecedor.bairro,
    
                atualizar_fornecedor.numero,
    
                atualizar_fornecedor.telefone,
    
                atualizar_fornecedor.email,
    
                atualizar_fornecedor.nome_marca
            ]

        );

        res.json({
            message: "Fornecedor atualizado com sucesso",
            affectedRows: result.affectedRows
        
        });
    }catch(erro){
        res.status(500).send("Erro ao acessar o banco" + erro.message);

    }finally{
        if(conn) conn.end();
    }
};