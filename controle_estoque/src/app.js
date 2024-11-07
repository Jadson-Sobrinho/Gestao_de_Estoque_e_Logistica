var express = require('express');
var app = express();
app.use(express.json());

let rotaFornecedor = require('./api/routes/fornecedor/index');
app.use('/user', rotaFornecedor);

let rotaProduto = require('./api/routes/produto/index');
app.use('/produto', rotaProduto);

let rotaMarca = require('./api/routes/marca/index');
app.use('/marca', rotaMarca);

let rotaLote = require('./api/routes/lote/index');
app.use('/lote', rotaLote);

let rotaNfse = require('./api/routes/NFS-e/ler_xml');
app.use('/NFS-e', rotaNfse)

app.listen(3001);