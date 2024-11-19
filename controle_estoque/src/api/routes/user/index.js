var express = require('express');
var Router = express.Router();
const autenticarToken = require('./token/validarToken');

let CriarUsuario = require('../user/criarUsuario');
let LoginUsuario = require('../user/login');
let LoginAPI = require('../user/loginAPI');
let GerarToken = require('./token/gerarToken');

Router.post('/criarUsuario', CriarUsuario);
Router.get('/login', autenticarToken, (req, res) => {LoginUsuario(req, res);} );
Router.post('/loginAPI', autenticarToken, (req, res) => {LoginAPI(req, res);} );
Router.get('/gerarToken', autenticarToken, (req, res) => {GerarToken(req, res);} );


module.exports = Router;