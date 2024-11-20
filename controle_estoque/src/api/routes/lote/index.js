var express = require('express');
var Router = express.Router();

let AdicionarLote = require('../lote/adicionarLote');

/**
 * @swagger
 * /lote/adicionarLote:
 *   post:
 *     tags:
 *       - Lote
 *     summary: Adiciona um novo lote de produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numero_lote:
 *                 type: string
 *                 example: "L125"
 *               nome_marca:
 *                 type: string
 *                 example: "Nestlé"
 *               nome_produto:
 *                 type: string
 *                 example: "Presunto Sadia"
 *               data_fabricacao:
 *                 type: string
 *                 format: date
 *                 example: "2024-11-03"
 *               data_validade:
 *                 type: string
 *                 format: date
 *                 example: "2025-01-12"
 *               quantidade:
 *                 type: integer
 *                 example: 500
 *     responses:
 *       200:
 *         description: Lote adicionado com sucesso
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro ao acessar o banco de dados
 */


Router.post('/adicionarLote', AdicionarLote);

module.exports = Router;