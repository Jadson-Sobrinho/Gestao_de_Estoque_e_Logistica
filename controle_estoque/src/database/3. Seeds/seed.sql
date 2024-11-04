USE db_controle_estoque;


INSERT INTO tb_endereco (cep, uf, cidade, bairro) VALUES 
('12345678', 'SP', 'São Paulo', 'Centro'),
('23456789', 'RJ', 'Rio de Janeiro', 'Copacabana'),
('34567890', 'MG', 'Belo Horizonte', 'Savassi');

INSERT INTO tb_marca (nome_marca) VALUES 
('Marca X'),
('Marca Y'),
('Marca Z');


INSERT INTO tb_fornecedor (razao_social, CNPJ, marca_id) VALUES 
('Fornecedor A Ltda', '12345678000195', 1),
('Fornecedor B S/A', '23456789000110', 2),
('Fornecedor C Eireli', '34567890000122', 3);


INSERT INTO tb_telefone_fornecedor (fornecedor_id, telefone) VALUES 
(1, '11987654321'),
(1, '11876543210'),
(2, '21987654321'),
(3, '31987654321');


INSERT INTO tb_email_fornecedor (fornecedor_id, email) VALUES 
(1, 'contato@fornecedora.com'),
(2, 'vendas@fornecedorB.com'),
(3, 'info@fornecedorC.com');


INSERT INTO tb_endereco_fornecedor (endereco_id, fornecedor_id, numero) VALUES 
(1, 1, '100'),
(2, 2, '200'),
(3, 3, '300');


INSERT INTO tb_categoria (nome_categoria) VALUES 
('Bebidas'),
('Alimentos'),
('Limpeza');


INSERT INTO tb_produto (marca_id, categoria_id, nome_produto, preco_custo, preco_venda, codigo_barra, descricao) VALUES 
(1, 1, 'Refrigerante Cola', 3.50, 5.00, '7891234567895', 'Refrigerante de cola saborosa.'),
(2, 2, 'Biscoito Cream Cracker', 1.20, 2.50, '7891234567896', 'Biscoito crocante e leve.'),
(3, 3, 'Detergente Líquido', 2.00, 4.00, '7891234567897', 'Detergente para lavagem de louças.');

