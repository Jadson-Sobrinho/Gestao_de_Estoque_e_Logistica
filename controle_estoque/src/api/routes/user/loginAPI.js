const pool = require('../../../config/connection');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


module.exports = async function login(req, res) {
    let conn;
    const user_info = {
        login: req.body.login,
        senha: req.body.senha

    }

try{
    conn = await pool.getConnection();
    const result = await conn.query("SELECT login, senha from tb_usuario WHERE login = ?", 
        [
            user_info.login
        ]
    );

    if (result.length === 0) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const match = await bcryptjs.compare(user_info.senha, result[0].senha);
    if(match) {
        // Cria o token com o user_info e o hash da senha
        const token = jwt.sign({...user_info, senha: result[0].senha}, process.env.JWT_SECRET, { expiresIn: '8h' });
        res.send(JSON.stringify({token: token}));
        
    } else {

        res.send(JSON.stringify({message: "Senha Incorreta"})); 
    }

}catch(erro){
    res.status(500).send({message: "Erro ao tentar se conectar ao banco" + erro})

}finally{
    if (conn) conn.end();
}

};