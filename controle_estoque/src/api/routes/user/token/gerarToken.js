const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

module.exports = async function GerarToken(req, res) {

    // Informações do usuário
    const user_info = {
        login: req.body.login,
        senha: req.body.senha
    };
    
    // Gera um hash seguro da senha
    const hashSenha = await bcryptjs.hash(user_info.senha, 5);

    // Cria o token com o user_info e o hash da senha
    const token = jwt.sign({...user_info, senha: hashSenha }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
};