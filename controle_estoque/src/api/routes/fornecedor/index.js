var express = require('express');
var Router = express.Router();


let criarFornecedor = require('./criarFornecedor');
let atualizarFornecedor = require('./atualizarFornecedor');
let excluirFornecedor = require('./excluirFornecedor');
let buscarFornecedor = require('./buscarFornecedor');
let buscarTodosFornecedor = require('./buscarTodosFornecedores');

Router.post('/create', criarFornecedor);
Router.get('/search', buscarFornecedor);
Router.patch('/update', atualizarFornecedor);
Router.delete('/delete', excluirFornecedor);
Router.get('/listar_fornecedores', buscarTodosFornecedor);    

module.exports = Router;
