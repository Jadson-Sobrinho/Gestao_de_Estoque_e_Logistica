CREATE DATABASE IF NOT EXISTS db_controle_estoque;


USE db_controle_estoque;

/*Criação da tabela do endereço do fornecedor*/
CREATE TABLE IF NOT EXISTS tb_endereco (
endereco_id INT AUTO_INCREMENT,
cep CHAR(8) NOT NULL,
uf CHAR(2) NOT NULL,
cidade VARCHAR(35) NOT NULL,
bairro VARCHAR(35),

PRIMARY KEY (endereco_id)

);

/*Criação da tabela do fornecedor

Indice: nome_completo - Cada fornecedor tem uma razão social diferente, assim, agilizará na consulta
Indice: CNPJ - O cnpj da empresa será usado constantemente para adquirir outras info da empresa (GET)

*/
CREATE TABLE IF NOT EXISTS tb_fornecedor(
fornecedor_id INT AUTO_INCREMENT,
razao_social VARCHAR(50) NOT NULL,
CNPJ CHAR(14) NOT NULL UNIQUE,

PRIMARY KEY (fornecedor_id),
INDEX idx_razao_social (razao_social),
INDEX idx_CNPJ (CNPJ)

);

/*Criação de um atributo multivalorado associado ao telefone do fornecedor*/
CREATE TABLE IF NOT EXISTS tb_telefone_fornecedor(
telefone_id INT AUTO_INCREMENT,
fornecedor_id INT NOT NULL,
telefone CHAR(11),

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
email VARCHAR(50),

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

/*Criação da tabela das marcas dos produtos

Indice: nome - Um estoque pode conter várias marcas distintas, sendo assim, um index se faz necessário

*/
CREATE TABLE IF NOT EXISTS tb_marca(
marca_id INT AUTO_INCREMENT,
fornecedor_id INT NOT NULL,
nome_marca VARCHAR(45) NOT NULL,

PRIMARY KEY (marca_id),
FOREIGN KEY (fornecedor_id) REFERENCES tb_fornecedor(fornecedor_id) 
	ON UPDATE CASCADE
	ON DELETE CASCADE,
INDEX idx_marca (nome_marca)
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
preco_custo DECIMAL(10,2) NOT NULL,
preco_venda DECIMAL(10,2) NOT NULL,
quantidade INT NOT NULL,
codigo_barra CHAR(13) NOT NULL UNIQUE,
descricao TEXT NULL,

PRIMARY KEY (produto_id),
FOREIGN KEY (marca_id) REFERENCES tb_marca(marca_id),
FOREIGN KEY (categoria_id) REFERENCES tb_categoria (categoria_id),
INDEX idx_nome(nome_produto)

);















