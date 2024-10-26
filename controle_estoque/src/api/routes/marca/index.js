var express = require('express');
var Router = express.Router();

let BuscarProdutosMarca = require('../marca/buscarProdutosMarca');

Router.get('/listar_produtos_marca', BuscarProdutosMarca);

module.exports = Router;