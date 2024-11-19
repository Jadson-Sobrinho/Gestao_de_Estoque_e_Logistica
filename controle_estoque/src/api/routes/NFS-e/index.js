var express = require('express');
var Router = express.Router();

let LerXml = require('../NFS-e/ler_xml');
let SetXml = require('../NFS-e/SetXml');

Router.get('/ler-xml', LerXml);
Router.post('/Set-xml', SetXml);

module.exports = Router;
