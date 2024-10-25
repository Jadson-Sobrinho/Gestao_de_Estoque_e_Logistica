USE db_controle_estoque;

DELIMITER $$

/*Adicionar um novo produto, associando-o a uma marca existente.*/
CREATE PROCEDURE IF NOT EXISTS cadastrar_produto (

IN p_nome_produto VARCHAR(50),
IN p_descricao TEXT,
IN p_nome_marca VARCHAR(45),
IN p_nome_categoria VARCHAR(20),
IN p_preco_custo DECIMAL(10,2),
IN p_preco_venda DECIMAL(10,2),
IN p_quantidade INT,
IN p_codigo_barra CHAR(13)

)


BEGIN
START TRANSACTION;
	
	 IF p_nome_categoria NOT IN ('FRIOS', 'CARNES', 'LIMPEZA', 'HIGIENE E BELEZA', 'LATICÍCIOS', 'OUTROS') THEN
	 	SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Tipo de categoria não cadastrada';
	 END IF;
	 
	 IF p_nome_marca NOT IN (SELECT nome_marca FROM tb_marca WHERE nome_marca = p_nome_marca) THEN
	 	SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Marca não cadastrada.';
	 END IF;

    INSERT INTO tb_produto (marca_id, categoria_id, nome_produto, preco_custo, preco_venda, quantidade, codigo_barra, descricao)
    VALUES (
	 	(SELECT marca_id FROM tb_marca WHERE nome_marca = p_nome_marca),
		(SELECT categoria_id FROM tb_categoria WHERE nome_categoria = p_nome_categoria), p_nome_produto, p_preco_custo, p_preco_venda, p_quantidade, p_codigo_barra, p_descricao);
    
COMMIT;
END$$

DELIMITER ;


DELIMITER $$

CREATE PROCEDURE IF NOT EXISTS Update_produto_info (

IN p_produto_id INT,
IN p_nome_produto VARCHAR(50),
IN p_descricao TEXT,
IN p_nome_marca VARCHAR(45),
IN p_nome_categoria VARCHAR(20),
IN p_preco_custo DECIMAL(10,2),
IN p_preco_venda DECIMAL(10,2),
IN p_quantidade INT,
IN p_codigo_barra CHAR(13)


)

BEGIN

DECLARE v_marca_id INT;
DECLARE v_categoria_id INT;

SELECT marca_id INTO v_marca_id FROM tb_marca WHERE nome_marca = p_nome_marca;
SELECT categoria_id INTO v_categoria_id FROM tb_categoria WHERE nome_categoria = p_nome_categoria;

IF v_marca_id IS NOT NULL AND v_categoria_id IS NOT NULL THEN
START TRANSACTION;

UPDATE tb_produto
SET
marca_id = v_marca_id,
categoria_id = v_categoria_id,
preco_custo = p_preco_custo,
preco_venda = p_preco_venda,
quantidade = p_quantidade,
codigo_barra = p_codigo_barra,
descricao = p_descricao
WHERE produto_id = p_produto_id;

COMMIT;
ELSE
	SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Marca ou categoria não encontrada';
END IF;
END$$


DELIMITER ;

