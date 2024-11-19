var express = require('express');
var Router = express.Router();

let criarProduto = require('./criarProduto');
let atualizarProduto = require('./atualizarProduto');
let excluirProduto = require('./excluirProduto');
let buscarProduto = require('./buscarProduto');
let buscarTodosProduto = require('./buscarTodosProduto');
let listarCategoriaProdutos = require('./listarCategoriaProdutos');

Router.post('/create', criarProduto);
Router.get('/search', buscarProduto);
Router.patch('/update', atualizarProduto);
Router.delete('/delete', excluirProduto);
Router.get('/listar_produtos', buscarTodosProduto);
Router.get('/listar_categoria_produtos', listarCategoriaProdutos);

module.exports = Router;
