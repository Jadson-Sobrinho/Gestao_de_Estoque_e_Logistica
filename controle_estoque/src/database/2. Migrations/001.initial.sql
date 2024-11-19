CREATE DATABASE IF NOT EXISTS db_controle_estoque;


USE db_controle_estoque;

/*Criação da tabela do endereço do fornecedor*/
CREATE TABLE IF NOT EXISTS tb_endereco (
endereco_id INT AUTO_INCREMENT,
cep CHAR(8) NOT NULL,
uf CHAR(2) NOT NULL,
cidade VARCHAR(35) NOT NULL,
bairro VARCHAR(35),

PRIMARY KEY (endereco_id),
INDEX idx_cep (cep)

);

/*Criação da tabela das marcas dos produtos

Indice: nome_marca - Um estoque pode conter várias marcas distintas, sendo assim, um index se faz necessário

*/
CREATE TABLE IF NOT EXISTS tb_marca(
marca_id INT AUTO_INCREMENT,
nome_marca VARCHAR(45) NOT NULL,

PRIMARY KEY (marca_id),
INDEX idx_marca (nome_marca)
);


/*Criação da tabela do fornecedor

Indice: nome_completo - Cada fornecedor tem uma razão social diferente, assim, agilizará na consulta
Indice: CNPJ - O cnpj da empresa será usado constantemente para adquirir outras info da empresa (GET)

*/
CREATE TABLE IF NOT EXISTS tb_fornecedor(
fornecedor_id INT AUTO_INCREMENT,
razao_social VARCHAR(50) NOT NULL,
CNPJ CHAR(14) NOT NULL UNIQUE,
marca_id INT NOT NULL,

PRIMARY KEY (fornecedor_id),
FOREIGN KEY (marca_id) REFERENCES tb_marca(marca_id),
INDEX idx_razao_social (razao_social),
INDEX idx_CNPJ (CNPJ)

);

/*Criação de um atributo multivalorado associado ao telefone do fornecedor*/
CREATE TABLE IF NOT EXISTS tb_telefone_fornecedor(
telefone_id INT AUTO_INCREMENT,
fornecedor_id INT NOT NULL,
telefone CHAR(11) UNIQUE,

PRIMARY KEY (telefone_id, fornecedor_id),
FOREIGN KEY (fornecedor_id) REFERENCES tb_fornecedor(fornecedor_id) 
	ON UPDATE CASCADE 
	ON DELETE CASCADE
);

/*Criação de um atributo multivalorado associado ao email do fornecedor

Indices: email - Por ser um atributo único e de relevancia na busca de infomações da empresa

*/
CREATE TABLE IF NOT EXISTS tb_email_fornecedor(
email_id INT AUTO_INCREMENT,
fornecedor_id INT NOT NULL,
email VARCHAR(50) UNIQUE,

PRIMARY KEY (email_id, fornecedor_id),
FOREIGN KEY (fornecedor_id) REFERENCES tb_fornecedor(fornecedor_id)
	ON UPDATE CASCADE 
 	ON DELETE CASCADE,
INDEX idx_email (email)

);

/*Criaçao de uma tabela associativa entre o endereco e o fornecedor*/
CREATE TABLE IF NOT EXISTS tb_endereco_fornecedor (
endereco_id INT NOT NULL,
fornecedor_id INT NOT NULL,
numero VARCHAR(4),

PRIMARY KEY (endereco_id, fornecedor_id),
FOREIGN KEY (endereco_id) REFERENCES tb_endereco(endereco_id) 
	ON UPDATE CASCADE
	ON DELETE CASCADE,
FOREIGN KEY (fornecedor_id) REFERENCES tb_fornecedor(fornecedor_id) 
	ON UPDATE CASCADE 
	ON DELETE CASCADE

);


CREATE TABLE IF NOT EXISTS tb_categoria (
categoria_id INT AUTO_INCREMENT,
nome_categoria VARCHAR(20),

PRIMARY KEY (categoria_id)

);

/*Criação da tabela dos produtos

Indice: nome - Um produto será constantemente consultado atráves do seu nome para obter as infomações

*/
CREATE TABLE IF NOT EXISTS tb_produto(
produto_id INT AUTO_INCREMENT,
marca_id INT NOT NULL,
categoria_id INT NOT NULL,
nome_produto VARCHAR(50) NOT NULL,
preco_custo DECIMAL(10,2) NOT NULL CHECK (preco_custo > 0),
preco_venda DECIMAL(10,2) NOT NULL CHECK (preco_venda > 0),
codigo_barra CHAR(13) NOT NULL UNIQUE,
descricao TEXT NULL,

PRIMARY KEY (produto_id),
FOREIGN KEY (marca_id) REFERENCES tb_marca(marca_id),
FOREIGN KEY (categoria_id) REFERENCES tb_categoria (categoria_id),
INDEX idx_nome(nome_produto)

);

CREATE TABLE IF NOT EXISTS tb_lote (
lote_id INT AUTO_INCREMENT,
produto_id INT NOT NULL,
marca_id INT NOT NULL,
numero_lote VARCHAR(20) NOT NULL,
data_fabricacao DATE NOT NULL,
data_validade DATE NOT NULL,
quantidade INT NOT NULL CHECK (quantidade >= 0),
created_at DATETIME DEFAULT CURRENT_TIMESTAMP(),

PRIMARY KEY (lote_id),
FOREIGN KEY (marca_id) REFERENCES tb_marca (marca_id),
FOREIGN KEY (produto_id) REFERENCES tb_produto(produto_id) 
	ON UPDATE CASCADE 
   ON DELETE CASCADE,
   UNIQUE (numero_lote, produto_id, marca_id)  -- Garante que o número do lote é único para cada produto
);


CREATE TABLE IF NOT EXISTS tb_estoque (
estoque_id INT AUTO_INCREMENT,
lote_id INT NOT NULL,
quantidade INT NOT NULL CHECK (quantidade >= 0),
created_at DATETIME DEFAULT CURRENT_TIMESTAMP(),
updated_at DATETIME DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),

PRIMARY KEY (estoque_id),
FOREIGN KEY (lote_id) REFERENCES tb_lote (lote_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE

);



CREATE TABLE IF NOT EXISTS tb_movimentacao_estoque (
movimentacao_id INT AUTO_INCREMENT,
lote_id INT NOT NULL,
quantidade INT NOT NULL,
tipo_movimento ENUM('Entrada', 'Saída') NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP(),

PRIMARY KEY (movimentacao_id),
FOREIGN KEY (lote_id) REFERENCES tb_lote (lote_id)
	ON UPDATE CASCADE
	ON DELETE CASCADE

);


CREATE TABLE IF NOT EXISTS tb_estoque_log (
log_id INT AUTO_INCREMENT,
produto_id INT NOT NULL,
quantidade INT NOT NULL,
tipo_alerta ENUM('Limite Mínimo', 'Limite Máximo') NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP(),

PRIMARY KEY (log_id),
FOREIGN KEY (produto_id) REFERENCES tb_produto(produto_id)
);



CREATE TABLE IF NOT EXISTS tb_produto_log (
log_id INT AUTO_INCREMENT,
produto_id INT,
preco_custo DECIMAL(10,2),
preco_venda DECIMAL(10,2),
created_at DATETIME DEFAULT CURRENT_TIMESTAMP(),

PRIMARY KEY(log_id),
FOREIGN KEY (produto_id) REFERENCES tb_produto (produto_id)


);

CREATE TABLE IF NOT EXISTS tb_usuario(
usuario_id INT AUTO_INCREMENT,
login VARCHAR(50) NOT NULL UNIQUE,
senha CHAR(64) NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP(),
updated_at DATETIME
	ON UPDATE CURRENT_TIMESTAMP(),

PRIMARY KEY (usuario_id)


);


