var fs = require('fs');
var xml2js = require('xml2js');
const parser = new xml2js.Parser();


module.exports = async function (req, res) {
    const caminho = 'C:/Users/c31f4/OneDrive/Desktop/Faculdade/UniFTC/2º/LinguagemSQL/Controle de estoque/NFSe_202400000051830_G8W5-5G4A.xml'; 

    // Ler o arquivo XML
    fs.readFile(caminho, 'utf-8', (err, data) => {
        if (err) {
            // Enviar resposta de erro caso haja um problema ao ler o arquivo
            res.status(500).json({ message: "Erro ao ler o XML", erro: err.message });
            return;
        }

        if (!data) {
            // Enviar resposta de erro caso o conteúdo do arquivo seja indefinido ou vazio
            res.status(500).json({ message: 'O arquivo XML está vazio ou não pôde ser lido corretamente.' });
            return;
        }

        // Converter XML para JSON
        parser.parseString(data, (err, resultado) => {
            if (err) {
                // Enviar resposta de erro caso haja um problema ao converter o XML
                res.status(500).json({ message: "Erro ao converter o XML", erro: err.message });
                return;
            }

            // Enviar o resultado JSON como resposta
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(resultado, null, 2));
        });
    });
};