const jwt = require('jsonwebtoken');

    //Validar o token
    module.exports = function autenticarToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Extrai o token do cabeçalho Authorization
       
        if (!token) {
            return res.status(401).json({ message: 'Token não fornecido' });
          }
          
        jwt.verify(token, process.env.JWT_SECRET, (erro, user)=> {

        if(erro){
            return res.status(403).send(JSON.stringify({ message: 'Token inválido' }));
        }
        req.user = user; // Adiciona o usuário decodificado ao objeto da requisição
        next(); // Continua para o próximo middleware ou rota

        
        } )

    }