var express = require('express');
var Router = express.Router();


let criarFornecedor = require('./criarFornecedor');
let atualizarFornecedor = require('./atualizarFornecedor');
let excluirFornecedor = require('./excluirFornecedor');
let buscarFornecedor = require('./buscarFornecedor');
let buscarTodosFornecedor = require('./buscarTodosFornecedores');


/**
 * @swagger
 * /fornecedor/create:
 *   post:
 *     tags:
 *       - Fornecedor 
 *     summary: Cria um novo fornecedor
 *     description: Cria um fornecedor com os dados fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               razao_social:
 *                 type: string
 *                 example: "Softaware LTDA"
 *               CNPJ:
 *                 type: string
 *                 example: "44556677111144"
 *               cep:
 *                 type: string
 *                 example: "20010010"
 *               uf:
 *                 type: string
 *                 example: "RJ"
 *               cidade:
 *                 type: string
 *                 example: "Rio de Janeiro"
 *               bairro:
 *                 type: string
 *                 example: "Centro"
 *               numero:
 *                 type: string
 *                 example: "1000"
 *               telefone:
 *                 type: string
 *                 example: "15987653321"
 *               email:
 *                 type: string
 *                 example: "softaware@gmail.com.br"
 *               nome_marca:
 *                 type: string
 *                 example: "Dev"
 *     responses:
 *       200:
 *         description: Fornecedor criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Fornecedor criado com sucesso"
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno ao processar a requisição
 */

Router.post('/create', criarFornecedor);


/**
 * @swagger
 * /fornecedor/search:
 *   post:
 *     tags:
 *       - Fornecedor
 *     summary: Busca um fornecedor pelo CNPJ
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CNPJ:
 *                 type: string
 *                 example: "12345678000195"
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 fornecedor:
 *                   type: object
 *                   description: Informações do fornecedor
 *                   example:
 *                     CNPJ: "12345678000195"
 *       400:
 *         description: Requisição inválida - CNPJ ausente
 *       500:
 *         description: Erro ao acessar o banco de dados
 */    
Router.post('/search', buscarFornecedor);


/**
 * @swagger
 * /fornecedor/update:
 *   patch:
 *     tags:
 *       - Fornecedor
 *     summary: Atualizar um fornecedor
 *     description: Atualiza um fornecedor com os dados fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               razao_social:
 *                 type: string
 *                 example: "Softaware"
 *               CNPJ:
 *                 type: string
 *                 example: "44556677111144"
 *               cep:
 *                 type: string
 *                 example: "20010010"
 *               uf:
 *                 type: string
 *                 example: "RJ"
 *               cidade:
 *                 type: string
 *                 example: "Rio de Janeiro"
 *               bairro:
 *                 type: string
 *                 example: "Centro"
 *               numero:
 *                 type: string
 *                 example: "1000"
 *               telefone:
 *                 type: string
 *                 example: "15987653321"
 *               email:
 *                 type: string
 *                 example: "softaware@gmail.com.br"
 *               nome_marca:
 *                 type: string
 *                 example: "Dev"
 *     responses:
 *       200:
 *         description: Fornecedor atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Fornecedor atualizado com sucesso"
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno ao processar a requisição
 */
Router.patch('/update', atualizarFornecedor);

/**
 * @swagger
 * /fornecedor/delete:
 *   delete:
 *     tags:
 *       - Fornecedor
 *     summary: Excluir um fornecedor pelo CNPJ
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CNPJ:
 *                 type: string
 *                 example: "12345678000195"
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 
 *       400:
 *         description: Requisição inválida - CNPJ ausente
 *       500:
 *         description: Erro ao acessar o banco de dados
 */ 
Router.delete('/delete', excluirFornecedor);

/**
 * @swagger
 * /fornecedor/listar_fornecedores:
 *   get:
 *     tags:
 *       - Fornecedor
 *     summary: Busca todos os fonecedores
 *     responses:
 *       200:
 *         description: Sucesso
 *       400:
 *         description: Requisição inválida 
 *       500:
 *         description: Erro ao acessar o banco de dados
 */    
Router.get('/listar_fornecedores', buscarTodosFornecedor);    

module.exports = Router;
