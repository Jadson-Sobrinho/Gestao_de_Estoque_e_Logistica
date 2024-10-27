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
git clone <URL_do_repositorio>
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
DB_PASS=senha
DB_NAME=db_controle_estoque
PORT=3001
```

# **4. Estrutura do Projeto**
app.js: Arquivo de inicialização principal da aplicação. Aqui, o servidor é configurado e as rotas principais são registradas.
api: Contém os controladores e rotas da API para operações CRUD no estoque.
config: Contém as configurações de banco de dados
database: Define o esquema do banco de dados.

# **5. Funcionamento das Funcionalidades**
Cada módulo tem funções específicas:

API: Possui endpoints REST para permitir operações como criação, leitura, atualização e exclusão de itens.
Configuração de Banco de Dados: O projeto se conecta ao banco através de um arquivo de configuração localizado na pasta config, utilizando as credenciais do .env.
