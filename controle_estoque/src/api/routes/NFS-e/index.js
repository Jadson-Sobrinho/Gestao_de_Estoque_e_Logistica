var express = require('express');
var Router = express.Router();

let LerXml = require('../NFS-e/ler_xml');

Router.get('/ler-xml', LerXml);

module.exports = Router;
