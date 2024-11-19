var express = require('express');
var Router = express.Router();

let AdicionarLote = require('../lote/adicionarLote');

Router.post('/adicionarLote', AdicionarLote);

module.exports = Router;