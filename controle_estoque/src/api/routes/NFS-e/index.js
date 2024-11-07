var express = require('express');
var Router = express.Router();

let LerXml = require('./ler_xml');

Router.get('/ler_xml', LerXml);

module.exports = Router;