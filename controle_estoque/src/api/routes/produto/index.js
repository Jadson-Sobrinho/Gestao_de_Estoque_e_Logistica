var express = require('express');
var Router = express.Router();

let criarProduto = require('./criarProduto');
let atualizarProduto = require('./atualizarProduto');
let excluirProduto = require('./excluirProduto');
let buscarProduto = require('./buscarProduto');
let buscarTodosProduto = require('./buscarTodosProduto');
let listarCategoriaProdutos = require('./listarCategoriaProdutos');

/**
 * @swagger
 * /produto/create:
 *   post:
 *     tags:
 *       - Produto
 *     summary: Adiciona um novo produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_produto:
 *                 type: string
 *                 example: "Presunto"
 *               descricao:
 *                 type: string
 *                 example: "500g frango"
 *               nome_marca:
 *                 type: string
 *                 example: "Nestlé"
 *               nome_categoria:
 *                 type: string
 *                 example: "FRIOS"
 *               preco_custo:
 *                 type: string
 *                 example: "8.50"
 *               preco_venda:
 *                 type: string
 *                 example: "9.50"
 *               quantidade:
 *                 type: integer
 *                 example: 100
 *               codigo_barra:
 *                 type: string
 *                 example: "7771234567890"
 *     responses:
 *       200:
 *         description: Produto adicionado com sucesso
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro ao acessar o banco de dados
 */
Router.post('/create', criarProduto);

/**
 * @swagger
 * /produto/search:
 *   post:
 *     tags:
 *       - Produto
 *     summary: Busca um produto pleo nome
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_produto:
 *                 type: string
 *                 example: "Presunto"
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nome_produto:
 *                   type: string
 *                   example: "Presunto"
 *                 descricao:
 *                   type: string
 *                   example: "500g frango"
 *                 nome_marca:
 *                   type: string
 *                   example: "Nestlé"
 *                 nome_categoria:
 *                   type: string
 *                   example: "FRIOS"
 *                 preco_custo:
 *                   type: string
 *                   example: "8.50"
 *                 preco_venda:
 *                   type: string
 *                   example: "9.50"
 *                 quantidade:
 *                   type: integer
 *                   example: 100
 *                 codigo_barra:
 *                   type: string
 *                   example: "7771234567890"
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro ao acessar o banco de dados
 */
Router.post('/search', buscarProduto);

/**
 * @swagger
 * /produto/update:
 *   patch:
 *     tags:
 *       - Produto
 *     summary: Atualiza as informações de um produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_produto:
 *                 type: string
 *                 example: "Presunto"
 *               descricao:
 *                 type: string
 *                 example: "500g frango"
 *               nome_marca:
 *                 type: string
 *                 example: "Nestlé"
 *               nome_categoria:
 *                 type: string
 *                 example: "FRIOS"
 *               preco_custo:
 *                 type: string
 *                 example: "8.50"
 *               preco_venda:
 *                 type: string
 *                 example: "9.50"
 *               quantidade:
 *                 type: integer
 *                 example: 100
 *               codigo_barra:
 *                 type: string
 *                 example: "7771234567890"
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nome_produto:
 *                   type: string
 *                   example: "Presunto"
 *                 descricao:
 *                   type: string
 *                   example: "500g frango"
 *                 nome_marca:
 *                   type: string
 *                   example: "Nestlé"
 *                 nome_categoria:
 *                   type: string
 *                   example: "FRIOS"
 *                 preco_custo:
 *                   type: string
 *                   example: "8.50"
 *                 preco_venda:
 *                   type: string
 *                   example: "9.50"
 *                 quantidade:
 *                   type: integer
 *                   example: 100
 *                 codigo_barra:
 *                   type: string
 *                   example: "7771234567890"
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro ao acessar o banco de dados
 */

Router.patch('/update', atualizarProduto);


/**
 * @swagger
 * /produto/delete:
 *   delete:
 *     tags:
 *       - Produto
 *     summary: Exluir um produto pelo nome
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_produto:
 *                 type: string
 *                 example: "Presunto"
 *     responses:
 *       200:
 *         description: Produto deletado com Sucesso
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro ao acessar o banco de dados
 */
Router.delete('/delete', excluirProduto);

/**
 * @swagger
 * /produto/listar_produtos:
 *   get:
 *     tags:
 *       - Produto
 *     summary: Lista todos os Produtos Cadastrados
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nome_produto:
 *                   type: string
 *                   example: "Presunto"
 *                 descricao:
 *                   type: string
 *                   example: "500g frango"
 *                 nome_marca:
 *                   type: string
 *                   example: "Nestlé"
 *                 nome_categoria:
 *                   type: string
 *                   example: "FRIOS"
 *                 preco_custo:
 *                   type: string
 *                   example: "8.50"
 *                 preco_venda:
 *                   type: string
 *                   example: "9.50"
 *                 quantidade:
 *                   type: integer
 *                   example: 100
 *                 codigo_barra:
 *                   type: string
 *                   example: "7771234567890"
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro ao acessar o banco de dados
 */
Router.get('/listar_produtos', buscarTodosProduto);

/**
 * @swagger
 * /produto/listar_categoria_produtos:
 *   post:
 *     tags:
 *       - Produto
 *     summary: Lista todos os Produtos de uma Categoria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_categoria:
 *                 type: string
 *                 example: "Bebidas"
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nome_produto:
 *                   type: string
 *                   example: "Presunto"
 *                 descricao:
 *                   type: string
 *                   example: "500g frango"
 *                 nome_marca:
 *                   type: string
 *                   example: "Nestlé"
 *                 nome_categoria:
 *                   type: string
 *                   example: "FRIOS"
 *                 preco_custo:
 *                   type: string
 *                   example: "8.50"
 *                 preco_venda:
 *                   type: string
 *                   example: "9.50"
 *                 quantidade:
 *                   type: integer
 *                   example: 100
 *                 codigo_barra:
 *                   type: string
 *                   example: "7771234567890"
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro ao acessar o banco de dados
 */
Router.post('/listar_categoria_produtos', listarCategoriaProdutos);

module.exports = Router;
