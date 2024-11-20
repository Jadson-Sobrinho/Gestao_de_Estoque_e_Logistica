var express = require('express');
var Router = express.Router();

let BuscarProdutosMarca = require('../marca/buscarProdutosMarca');


/**
 * @swagger
 * /marca/listar_produtos_marca:
 *   post:
 *     tags:
 *       - Marca
 *     summary: Lista todos os Produtos de uma Marca
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_marca:
 *                 type: string
 *                 example: "Marca X"
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
 *                   example: "Marca X"
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
Router.post('/listar_produtos_marca', BuscarProdutosMarca);

module.exports = Router;