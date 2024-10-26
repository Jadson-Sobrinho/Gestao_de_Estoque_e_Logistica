var express = require('express');
var app = express();
app.use(express.json());

let rotaFornecedor = require('./src/routes/fornecedor/index');
app.use('/user', rotaFornecedor);

let rotaProduto = require('./src/routes/produto/index');
app.use('/produto', rotaProduto);

let rotaMarca = require('./src/routes/marca/index');
app.use('/marca', rotaMarca);



app.listen(3001);