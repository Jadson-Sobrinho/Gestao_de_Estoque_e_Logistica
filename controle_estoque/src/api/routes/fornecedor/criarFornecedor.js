const pool = require('../../../config/connection');
const {validarFornecedor} = require('../../validators/fornecedorValidator');

module.exports = async function(req, res){

    const fornecedor_info = {
        
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

    const {error} = validarFornecedor(req.body);

    if(error) {return res.status(400).json({erros: error.details})};

let conn;
try{
    conn  = await pool.getConnection();

    const result = await conn.query("CALL cadastrar_fornecedor (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
        [
            fornecedor_info.razao_social,
            fornecedor_info.CNPJ, 
            fornecedor_info.cep, 
            fornecedor_info.uf, 
            fornecedor_info.cidade, 
            fornecedor_info.bairro, 
            fornecedor_info.numero, 
            fornecedor_info.telefone, 
            fornecedor_info.email, 
            fornecedor_info.nome_marca
        ]

    );

    res.status(201).send(JSON.stringify({message: 'Fornecedor criado com sucesso'}));
}catch (erro){
    res.status(500).send("Erro ao criar o fornecedor " + erro.message);
    
}finally{
    if (conn) conn.end();
}

};