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
EF.numero,
TF.telefone,
FE.email, 
M.nome_marca
FROM tb_fornecedor AS F
INNER JOIN tb_endereco_fornecedor AS EF
ON EF.fornecedor_id = F.fornecedor_id
INNER JOIN tb_endereco AS E
ON E.endereco_id = EF.endereco_id
INNER JOIN tb_telefone_fornecedor AS TF
ON TF.fornecedor_id = F.fornecedor_id
INNER JOIN tb_email_fornecedor AS FE
ON FE.fornecedor_id = F.fornecedor_id
INNER JOIN tb_marca AS M
ON M.fornecedor_id = F.fornecedor_id
ORDER BY F.razao_social ASC;


/*View para simplificar a consulta do produto sua marca e seu fornecedor*/
CREATE VIEW IF NOT EXISTS vw_produto_info AS SELECT 
P.produto_id,
P.nome_produto, 
P.descricao,
M.nome_marca,
C.nome_categoria,
P.preco_custo,
P.preco_venda,
P.quantidade, 
P.codigo_barra  
FROM tb_produto AS P

INNER JOIN tb_marca AS M
ON M.marca_id = P.marca_id

INNER JOIN tb_categoria AS C
ON P.categoria_id = C.categoria_id

ORDER BY P.nome_produto ASC;



