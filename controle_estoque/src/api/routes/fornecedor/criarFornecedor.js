const pool = require('../../database/connection');

module.exports = async function(req, res){
    const novo_fornecedor = {
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


let conn;
try{
    conn  = await pool.getConnection();

    const result = await conn.query("CALL cadastrar_fornecedor (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
        [
            novo_fornecedor.razao_social,
            novo_fornecedor.CNPJ, 
            novo_fornecedor.cep, 
            novo_fornecedor.uf, 
            novo_fornecedor.cidade, 
            novo_fornecedor.bairro, 
            novo_fornecedor.numero, 
            novo_fornecedor.telefone, 
            novo_fornecedor.email, 
            novo_fornecedor.nome_marca
        ]

    );

    res.status(201).json({message: 'Fornecedor criado com sucesso'});
}catch (erro){
    res.status(500).send("Erro ao criar o fornecedor " + erro.message);
    
}finally{
    if (conn) conn.end();
}

};