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

# **3. Configuração e Instalação:**
   
### **Passo 1: Clonar o repositório**
```bash
git clone https://github.com/Jadson-Sobrinho/Gestao_de_Estoque_e_Logistica.git
cd controle_estoque
```

### **Passo 2: Instalar as Dependências**
No diretório do projeto, instale as dependências listadas no package.json:
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
DB_PORT=3006
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
               |--produto
                  |--atualizarProduto.js
                  |--buscarProduto.js
                  |--buscarTodosProduto.js
                  |--criarProduto.js
                  |--excluirProduto.js
                  |--index.js
                  |--listarCategoriaProdutos.js
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
* app.js: Arquivo de inicialização principal da aplicação. Aqui, o servidor é configurado e as rotas principais são registradas.
* api: Contém os controladores e rotas da API para operações CRUD no estoque.
* config: Contém as configurações de banco de dados
* database: Define o esquema do banco de dados.

# **5. Possíveis features**
* Digitalização da Nota Fiscal (quando em papel) - Sistema de OCR para identificar elementos comuns em notas fiscais
* Extração dos Dados (para notas eletrônicas XML)
