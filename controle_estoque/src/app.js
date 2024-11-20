var express = require('express');
var app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
app.use(express.json());


// Configurações do Swagger
const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Controle_Estoque",
        version: "1.0.0",
        description: "Documentação da API com Swagger",
      },
      tags: [
            {
                name: "Usuário",
                description: "Operações relacionadas aos usuários"
            },
            {
                name: "Fornecedor",
                description: "Operações relacionadas aos fornecedores"
            },
            {
                name: "Marca",
                description: "Operações relacionadas as Marcas"
            },
            {
                name: "Lote",
                description: "Operações relacionadas aos Lote"
            },
            {
                name: "Produto",
                description: "Operações relacionadas aos produtos"
            },
            {
                name: "Nota Fiscal",
                description: "Operações relacionadas a Nota Fiscal"
            }
        ],
      servers: [
        {
          url: "http://localhost:3001",
        },
      ],
    },
    apis: [
        "./src/api/routes/fornecedor/*.js",
        "./src/api/routes/lote/*.js",
        "./src/api/routes/marca/*.js",
        "./src/api/routes/NFS-e/*.js",
        "./src/api/routes/produto/*.js",
        "./src/api/routes/user/*.js",


    ],
  };

  
const swaggerDocs = swaggerJsDoc(swaggerOptions);
console.log(swaggerDocs); 
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

let rotaUsuario = require('./api/routes/user/index');
app.use('/usuario', rotaUsuario);

let rotaFornecedor = require('./api/routes/fornecedor/index');
app.use('/fornecedor', rotaFornecedor);

let rotaProduto = require('./api/routes/produto/index');
app.use('/produto', rotaProduto);

let rotaMarca = require('./api/routes/marca/index');
app.use('/marca', rotaMarca);

let rotaLote = require('./api/routes/lote/index');
app.use('/lote', rotaLote);

let rotaNfse = require('./api/routes/NFS-e/index');
app.use('/NFS-e', rotaNfse)

app.listen(3001);