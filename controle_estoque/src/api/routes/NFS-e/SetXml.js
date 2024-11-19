var multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({storage: storage});
global.uploadFile = null;

module.exports = async function (req, res) {

    const file = process.env.NfseCaminho; //receber aquivo pela requisição

    if(!file){
        return res.send(JSON.stringify({Message: 'Nenhum arquivo foi enviado'}));
    }

    global.uploadFile = file; //Usar outra solução mais segura

    res.send(JSON.stringify({Message: 'Arquivo foi recebido com sucesso'}));

}


module.exports.upload = upload.single('file');