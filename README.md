# **1. Visão Geral**
O projeto é uma aplicação de controle de estoque desenvolvida em Node.js e express.js, utilizando uma estrutura organizada em APIs para realizar operações de gerenciamento de inventário,
como adicionar, atualizar e remover itens. O sistema é configurado para interagir com um banco de dados relacional, para armazenar os dados de estoque.

# **2. Pré-requisitos**
Para executar este projeto, você precisará de:

* Node.js (versão mínima recomendada: 14.x ou superior)
* NPM (gerenciador de pacotes do Node.js)
* Express (versão recomendada 4.21.1)
* Joi (versão recomendada 17.13.3)
* Banco de Dados (MariaDB)
* bcriptjs (versão recomendada 2.4.3)
* dotenv (versão recomendada 16.4.5)
* JWT (versão recomendada 9.0.2)

# **3. Configuração e Instalação:**
   
### **Passo 1: Clonar o repositório**
```bash
git clone https://github.com/Jadson-Sobrinho/Gestao_de_Estoque_e_Logistica.git
cd controle_estoque
```

### **Passo 2: Instalar as Dependências**
No diretório do projeto, instale as dependências listadas no package.json com o único comando:
```bash
npm install
```

### **Passo 3: Configurar Variáveis de Ambiente**
**OBS: _O arquivo .env contém as variáveis de configuração para o banco de dados e outras configurações sensíveis. Certifique-se de preencher corretamente essas variáveis antes de iniciar o projeto._**
```js
DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=senha
DB_DATABASE=db_controle_estoque
DB_PORT=3000
```

# **4. Estrutura do Projeto**
```
|--Contole de estoque
   |--controle_estoque
      |--node_modules
      |--src
         |--api
            |--routes
               |--fornecedor
                  |--atualizarFornecedor.js
                  |--buscarFornecedor.js
                  |--buscarTodosFornecedores.js
                  |--criarFornecedor.js
                  |--excluirFornecedor.js
                  |--index.js
               |--lote
                  |--adicionarLote.js
                  |--index.js
               |--marca
                  |--buscarProdutosMarca.js
                  |--index.js
               |--NFS-e
                  |--upload
               |--ler_xml.js
               |--SetXml.js
               |-index.js
               |--marca
                  |--buscarProdutosMarca.js
                  |--index.js
               |--produto
                  |--atualizarProduto.js
                  |--buscarProduto.js
                  |--buscarTodosProduto.js
                  |--criarProduto.js
                  |--excluirProduto.js
                  |--index.js
                  |--listarCategoriaProdutos.js
               |--user
                  |-token
                     |--gerarToken.js
                     |--validarToken.js
                  |--criarUsuario.js
                  |--login.js
                  |--loginAPI.js
                  |--index.js
            |--validators
               |--fornecedorValidator.js
               |--produtoValidator.js
         |--config
            |--connection.js
         |--database
            |--1.Schemas
         	   |--Modelo lógico - Controle de estoque.pdf
            |--2.Migrations
         	   |--001.initial.sql
         	   |--002.produto_triggers.sql
         	   |--003.fornecedor_procedures.sql
         	   |--004.produto_procedure.sql
         	   |--005.views.sql
               |--006.lote_procedure.sql
               |--007.usuario_procedure.sql
            |--3.Seeds
         	   |--seed.sql
            |--README.txt
         |--app.js
      |--env.env
      |--.gitignore.txt
      |--package.json
      |--package-lock.json
      |--Design
         |--icons
         |Controle de estoque-MOBILE.fig
   |--README.txt
```
* src: Contém todos os scripts;
* api: Contém os controladores e rotas da API para operações CRUD no estoque;
* config: Contém as configurações de banco de dados;
* database: Define o esquema do banco de dados;
* app.js: Arquivo de inicialização principal da aplicação. Aqui, o servidor é configurado e as rotas principais são registradas;
* Design: Contém o protótipo do design do aplicativo de controle de estoque.

# **5. Rotas**

**Fornecedor**
* http://localhost:3001/fornecedor/create
* http://localhost:3001/fornecedor/update
* http://localhost:3001/fornecedor/search
* http://localhost:3001/fornecedor/delete
* http://localhost:3001/fornecedor/listar_fornecedores

**Lote**
* http://localhost:3001/lote/adicionarLote

**marca**
* http://localhost:3001/marca/listar_produtos_marca

**NFS-e**
* http://localhost:3001/NFS-e/ler-xml
* http://localhost:3001/NFS-e/Set-xml
=======
   |--README.txt

**Produto**
* http://localhost:3001/produto/create
* http://localhost:3001/produto/update
* http://localhost:3001/produto/search
* http://localhost:3001/produto/delete
* http://localhost:3001/produto/listar_produtos
* http://localhost:3001/produto/listar_categoria_produtos

**Usuario**
* http://localhost:3001/usuario/criarUsuario
* http://localhost:3001/usuario/login
* http://localhost:3001/usuario/loginAPI
* http://localhost:3001/usuario/gerarToken
* http://localhost:3001/usuario/validarToken