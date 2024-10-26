-- Inserindo valores na tabela tb_endereco
INSERT INTO tb_endereco (cep, uf, cidade, bairro) VALUES
('01001000', 'SP', 'São Paulo', 'Centro'),
('30140071', 'MG', 'Belo Horizonte', 'Savassi'),
('40020000', 'BA', 'Salvador', 'Comércio'),
('80010000', 'PR', 'Curitiba', 'Centro'),
('20010010', 'RJ', 'Rio de Janeiro', 'Centro'),
('90619900', 'RS', 'Porto Alegre', 'Petrópolis'),
('60060060', 'CE', 'Fortaleza', 'Aldeota'),
('78008000', 'MT', 'Cuiabá', 'Centro'),
('64000000', 'PI', 'Teresina', 'Centro'),
('69010010', 'AM', 'Manaus', 'Centro');



-- Inserindo valores na tabela tb_fornecedor
INSERT INTO tb_fornecedor (razao_social, CNPJ) VALUES
('Fornecedor São Paulo LTDA', '12345678000100'),
('Distribuidora Belo Horizonte SA', '98765432000111'),
('Fornecedor Salvador ME', '11223344000122'),
('Indústria Curitiba EPP', '99887766000133'),
('Comércio Rio de Janeiro Ltda', '44556677000144'),
('Porto Alegre Materiais SA', '22334455000155'),
('Distribuidora Fortaleza LTDA', '55667788000166'),
('Cuiabá Produtos Ltda', '66778899000177'),
('Fornecedor Teresina EIRELI', '77889900000188'),
('Manaus Insumos LTDA', '88990011000199');

INSERT INTO tb_telefone_fornecedor (fornecedor_id, telefone) VALUES
(1, '11987654321'),
(2, '31912345678'),
(3, '71987654321'),
(4, '41912345678'),
(5, '21987654321'),
(6, '51912345678'),
(7, '85987654321'),
(8, '65912345678'),
(9, '86987654321'),
(10, '92912345678');

INSERT INTO tb_email_fornecedor (fornecedor_id, email) VALUES
(1, 'contato@fornecedorsaopaulo.com.br'),
(2, 'vendas@distribuidorabh.com.br'),
(3, 'suporte@fornecedorsalvador.com.br'),
(4, 'financeiro@industriacuritiba.com.br'),
(5, 'comercial@comerciorj.com.br'),
(6, 'logistica@poamateriais.com.br'),
(7, 'vendas@distribuidorafortaleza.com.br'),
(8, 'financeiro@cuiabaprodutos.com.br'),
(9, 'suporte@fornecedorteresina.com.br'),
(10, 'contato@manausinsumos.com.br');


-- Inserindo valores na tabela tb_endereco_fornecedor
INSERT INTO tb_endereco_fornecedor (endereco_id, fornecedor_id, numero) VALUES
(1, 1, '123'),
(2, 2, '456'),
(3, 3, '789'),
(4, 4, '101'),
(5, 5, '202'),
(6, 6, '303'),
(7, 7, '404'),
(8, 8, '505'),
(9, 9, '606'),
(10, 10, '707');

-- Inserindo valores na tabela tb_marca
INSERT INTO tb_marca (fornecedor_id, nome_marca) VALUES
(1, 'Nestlé'),
(2, 'Kellogg\'s'),
(3, 'Heinz'),
(4, 'Danone'),
(5, 'PepsiCo'),
(1, 'Coca-Cola'),
(2, 'Unilever'),
(3, 'Mondelez'),
(4, 'General Mills'),
(5, 'Mars'),
(1, 'Ferrero'),
(2, 'Kraft Foods'),
(3, 'Conagra'),
(4, 'Tyson Foods'),
(5, 'JBS'),
(1, 'Lactalis'),
(2, 'FrieslandCampina'),
(3, 'Red Bull'),
(4, 'Barilla'),
(5, 'Dole');

-- Inserir as categorias predefinidas
INSERT INTO tb_categoria (nome_categoria) 
VALUES 
('FRIOS'),
('CARNES'),
('LIMPEZA'),
('HIGIENE E BELEZA'),
('LATICÍCIOS'),
('OUTROS');

-- Inserindo valores na tabela tb_produto
INSERT INTO tb_produto (marca_id, categoria_id, nome_produto, preco_custo, preco_venda, quantidade, codigo_barra, descricao) VALUES
(1, 1, 'Presunto Fatiado', 5.00, 8.50, 100, '7891234567890', 'Presunto fatiado de alta qualidade'),
(1, 1, 'Queijo Mussarela', 12.00, 18.00, 50, '7891234567891', 'Queijo mussarela fatiado'),
(2, 2, 'Filé de Frango', 10.50, 15.90, 70, '7891234567892', 'Filé de frango resfriado'),
(3, 2, 'Carne Bovina Moída', 25.00, 35.00, 40, '7891234567893', 'Carne moída fresca'),
(2, 3, 'Detergente Líquido', 2.50, 4.00, 200, '7891234567894', 'Detergente para lavar louça'),
(4, 3, 'Sabão em Pó', 10.00, 15.00, 120, '7891234567895', 'Sabão em pó multiuso'),
(3, 4, 'Shampoo Anticaspa', 8.00, 12.00, 90, '7891234567896', 'Shampoo anticaspa com fórmula natural'),
(5, 4, 'Condicionador Hidratante', 9.50, 14.50, 85, '7891234567897', 'Condicionador para cabelos secos'),
(1, 5, 'Leite Integral', 3.00, 5.00, 150, '7891234567898', 'Leite integral 1 litro'),
(2, 5, 'Iogurte Natural', 2.00, 3.50, 100, '7891234567899', 'Iogurte natural sem açúcar'),
(3, 5, 'Queijo Cottage', 15.00, 20.00, 60, '7891234567800', 'Queijo cottage light'),
(4, 6, 'Café em Pó', 8.00, 12.00, 80, '7891234567801', 'Café em pó tradicional'),
(5, 6, 'Açúcar Cristal', 2.50, 4.00, 200, '7891234567802', 'Açúcar cristal'),
(1, 3, 'Desinfetante', 4.00, 6.50, 120, '7891234567803', 'Desinfetante multiuso'),
(2, 3, 'Água Sanitária', 3.00, 5.00, 110, '7891234567804', 'Água sanitária para limpeza pesada'),
(3, 4, 'Creme Dental', 3.50, 5.50, 150, '7891234567805', 'Creme dental com flúor'),
(4, 4, 'Sabonete Líquido', 5.00, 7.50, 130, '7891234567806', 'Sabonete líquido hidratante'),
(5, 2, 'Picanha Bovina', 40.00, 55.00, 30, '7891234567807', 'Picanha bovina fresca'),
(1, 2, 'Coxa de Frango', 8.00, 12.00, 75, '7891234567808', 'Coxa de frango congelada'),
(2, 1, 'Salame Fatiado', 15.00, 22.00, 50, '7891234567809', 'Salame italiano fatiado');

