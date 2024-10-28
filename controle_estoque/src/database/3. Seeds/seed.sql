USE db_controle_estoque;

USE db_controle_estoque;

-- 1. Inserindo Endereços
INSERT INTO tb_endereco (cep, uf, cidade, bairro) VALUES 
('12345678', 'SP', 'São Paulo', 'Centro'),
('23456789', 'RJ', 'Rio de Janeiro', 'Copacabana'),
('34567890', 'MG', 'Belo Horizonte', 'Savassi');

-- 2. Inserindo Fornecedores
INSERT INTO tb_fornecedor (razao_social, CNPJ) VALUES 
('Fornecedor A Ltda', '12345678000195'),
('Fornecedor B S/A', '23456789000110'),
('Fornecedor C Eireli', '34567890000122');

-- 3. Inserindo Telefones dos Fornecedores
INSERT INTO tb_telefone_fornecedor (fornecedor_id, telefone) VALUES 
(1, '11987654321'),
(1, '11876543210'),
(2, '21987654321'),
(3, '31987654321');

-- 4. Inserindo E-mails dos Fornecedores
INSERT INTO tb_email_fornecedor (fornecedor_id, email) VALUES 
(1, 'contato@fornecedora.com'),
(2, 'vendas@fornecedorB.com'),
(3, 'info@fornecedorC.com');

-- 5. Inserindo Endereços dos Fornecedores
INSERT INTO tb_endereco_fornecedor (endereco_id, fornecedor_id, numero) VALUES 
(1, 1, '100'),
(2, 2, '200'),
(3, 3, '300');

-- 6. Inserindo Marcas
INSERT INTO tb_marca (fornecedor_id, nome_marca) VALUES 
(1, 'Marca X'),
(1, 'Marca Y'),
(2, 'Marca Z');

-- 7. Inserindo Categorias
INSERT INTO tb_categoria (nome_categoria) VALUES 
('Bebidas'),
('Alimentos'),
('Limpeza');

-- 8. Inserindo Produtos
INSERT INTO tb_produto (marca_id, categoria_id, nome_produto, preco_custo, preco_venda, codigo_barra, descricao) VALUES 
(1, 1, 'Refrigerante Cola', 3.50, 5.00, '7891234567895', 'Refrigerante de cola saborosa.'),
(1, 2, 'Biscoito Cream Cracker', 1.20, 2.50, '7891234567896', 'Biscoito crocante e leve.'),
(2, 3, 'Detergente Líquido', 2.00, 4.00, '7891234567897', 'Detergente para lavagem de louças.');

-- 9. Inserindo Lotes
INSERT INTO tb_lote (produto_id, numero_lote, data_fabricacao, data_validade, quantidade) VALUES 
(1, 'L123', '2024-01-01', '2025-01-01', 100),
(2, 'L124', '2024-02-01', '2025-02-01', 200),
(3, 'L125', '2024-03-01', '2025-03-01', 150);

-- 10. Inserindo Estoques
INSERT INTO tb_estoque (lote_id, quantidade) VALUES 
(1, 50),
(2, 75),
(3, 100);

-- 11. Inserindo Logs de Estoque
INSERT INTO tb_estoque_log (produto_id, quantidade, tipo_alerta) VALUES 
(1, 20, 'Limite Mínimo'),
(2, 80, 'Limite Máximo');
