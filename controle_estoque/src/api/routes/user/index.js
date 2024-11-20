var express = require('express');
var Router = express.Router();
const autenticarToken = require('./token/validarToken');

let CriarUsuario = require('../user/criarUsuario');
let LoginUsuario = require('../user/login');
let LoginAPI = require('../user/loginAPI');
let GerarToken = require('./token/gerarToken');

/**
 * @swagger
 * /usuario/create:
 *   post:
 *     tags:
 *       - Usuário
 *     summary: Criar um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *                 example: "jadson@gmail.com"
 *                 description: "E-mail do usuário"
 *               senha:
 *                 type: string
 *                 example: "12345678"
 *                 description: "Senha do usuário"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno no servidor
 */

Router.post('/create', CriarUsuario);


/**
 * @swagger
 * /usuario/login:
 *   post:
 *     tags:
 *       - Usuário
 *     summary: Logar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *                 example: "jadson@gmail.com"
 *                 description: "E-mail do usuário"
 *               senha:
 *                 type: string
 *                 example: "12345678"
 *                 description: "Senha do usuário"
 *     responses:
 *       200:
 *         description: Usuário logado com sucesso
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno no servidor
 */
Router.post('/login', LoginUsuario);

/**
 * @swagger
 * /usuario/gerarToken:
 *   post:
 *     tags:
 *       - Usuário
 *     summary: Gerar Token de acesso a API
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *                 example: "jadson@gmail.com"
 *                 description: "E-mail do usuário"
 *               senha:
 *                 type: string
 *                 example: "12345678"
 *                 description: "Senha do usuário"
*     responses:
 *       200:
 *         description: Autenticação realizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                   description: "Token JWT para autenticação nas demais rotas"
 *       400:
 *         description: Requisição inválida
 *       500:
 *         description: Erro interno no servidor
 */
Router.post('/gerarToken', GerarToken);

/**
 * @swagger
 * /usuario/loginAPI:
 *   post:
 *     tags:
 *       - Usuário
 *     summary: Obter Acesso a API
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               login:
 *                 type: string
 *                 example: "jadson@gmail.com"
 *                 description: "E-mail do usuário"
 *               senha:
 *                 type: string
 *                 example: "12345678"
 *                 description: "Senha do usuário"
 *     responses:
 *       200:
 *         description: Usuário logado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                   description: "Token JWT para autenticação"
 *       400:
 *         description: Requisição inválida
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro interno no servidor
 */
Router.post('/loginAPI', LoginAPI);

//Router.post('/loginAPI', autenticarToken, (req, res) => {LoginAPI(req, res);} );

module.exports = Router;