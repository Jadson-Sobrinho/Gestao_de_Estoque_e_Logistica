const pool = require('../../../config/connection');
const bcryptjs = require('bcryptjs')

module.exports = async function(req, res) {
    let conn;
    const user_info = {
        login: req.body.login,
        senha: req.body.senha

    }

    const hashSenha = await bcryptjs.hash(user_info.senha, 5);

    try{
        conn = await pool.getConnection();
        const result = await conn.query("CALL Criar_Usuario(?, ?);", 
            [
                user_info.login,
                hashSenha
            ]
        );

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({message: "Usuario criado com sucesso"})); 

    }catch(erro){
        res.status(500).send({message: "Erro ao tentar se conectar ao banco" + erro})

    }finally{
        if (conn) conn.end();
    }

};