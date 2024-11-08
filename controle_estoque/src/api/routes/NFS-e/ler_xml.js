var fs = require('fs');
var xml2js = require('xml2js');
const parser = new xml2js.Parser();
require('dotenv').config();



module.exports = async function (req, res) {
    const caminho = process.env.NfseCaminho;

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

            
            const nfseData = resultado?.CompNfse?.Nfse?.[0]?.InfNfse?.[0];
            const ValoresNfse = nfseData?.ValoresNfse?.[0]|| {};

            const NFSe_info = {
                Id: nfseData?.$?.Id || 'ID não encontrado',
                Numero: nfseData?.Numero?.[0] || 'Número não encontrado',
                CodigoVerificacao: nfseData?.CodigoVerificacao?.[0] || 'Código de verificação não encontrado',
                DataEmissao: nfseData?.DataEmissao?.[0] || 'Data de emissão não encontrada',
                OutrasInformacoes: nfseData.OutrasInformacoes?.[0] || 'Informações adicionais não encontradas',
                BaseCalculo: ValoresNfse?.BaseCalculo?.[0] || 'Base de calculo não encontrada',
                Aliquota: ValoresNfse?.Aliquota?.[0] || 'Aliquota não encontrato',
                ValorIss: ValoresNfse?.ValorIss?.[0] || 'Valor Iss não encontrado',
                ValorLiquidoNfse: ValoresNfse?.ValorLiquidoNfse?.[0] || 'Valor liquido não encontado'
            };


            // Enviar o resultado JSON como resposta
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(NFSe_info, null, 2));
            
        });


    });


};