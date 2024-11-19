USE db_controle_estoque;

/*View para simplificar uma consulta das infomações do fornecedor juntamente com o endereço*/
CREATE VIEW IF NOT EXISTS vw_fornecedor_info AS SELECT 
F.fornecedor_id, 
F.razao_social, 
F.CNPJ,
E.cep,
E.uf,
E.cidade,
E.bairro,
GROUP_CONCAT(DISTINCT EF.numero SEPARATOR ',') AS numero,
GROUP_CONCAT(DISTINCT TF.telefone SEPARATOR ',') AS telefone,
GROUP_CONCAT(DISTINCT EMF.email SEPARATOR ',') AS email,
GROUP_CONCAT(DISTINCT M.nome_marca SEPARATOR ',') AS nome_marca
FROM tb_fornecedor AS F
INNER JOIN tb_endereco_fornecedor AS EF
ON EF.fornecedor_id = F.fornecedor_id
INNER JOIN tb_endereco AS E
ON E.endereco_id = EF.endereco_id
LEFT JOIN tb_telefone_fornecedor AS TF
ON TF.fornecedor_id = F.fornecedor_id
LEFT JOIN tb_email_fornecedor AS EMF
ON EMF.fornecedor_id = F.fornecedor_id
INNER JOIN tb_marca AS M
ON M.marca_id = F.marca_id
GROUP BY 
F.fornecedor_id, 
F.razao_social, 
F.CNPJ,
E.cep,
E.uf,
E.cidade,
E.bairro
ORDER BY F.razao_social;

/*View para simplificar a consulta do produto sua marca e seu fornecedor*/
CREATE VIEW IF NOT EXISTS vw_produto_info AS SELECT 
P.nome_produto, 
P.descricao,
M.nome_marca,
C.nome_categoria,
SUM(E.quantidade) AS quantidade_total,
P.preco_custo,
P.preco_venda,
P.codigo_barra  
FROM tb_produto AS P

INNER JOIN tb_marca AS M
ON M.marca_id = P.marca_id

INNER JOIN tb_categoria AS C
ON P.categoria_id = C.categoria_id

INNER JOIN tb_lote AS L
ON L.produto_id = P.produto_id

INNER JOIN tb_estoque AS E
ON E.lote_id = L.lote_id

GROUP BY P.produto_id
ORDER BY P.nome_produto ASC;




/*Listar todos os produtos de uma marca específica*/
CREATE VIEW IF NOT EXISTS vw_marca_quantidade_produtos AS SELECT
M.nome_marca,
P.nome_produto,
E.quantidade,
P.codigo_barra

FROM tb_marca AS M

INNER JOIN tb_produto AS P
ON P.marca_id = M.marca_id

INNER JOIN tb_lote AS L
ON L.produto_id = P.produto_id

INNER JOIN tb_estoque AS E
ON E.lote_id = L.produto_id;

/*WHERE M.nome_marca = 'Marca Y';*/



/*Consultar produtos em uma determinada categoria*/
CREATE VIEW IF NOT EXISTS vw_categoria_produtos AS SELECT 
C.nome_categoria, 
p.nome_produto,
e.quantidade, 
p.preco_custo, 
p.preco_venda, 
p.codigo_barra
FROM tb_produto p
INNER JOIN tb_categoria c ON p.categoria_id = c.categoria_id
INNER JOIN tb_lote l ON l.produto_id = p.produto_id
INNER JOIN tb_estoque e ON e.lote_id = l.lote_id;
/*WHERE nome_categoria = 'Móveis';*/

