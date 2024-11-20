USE db_controle_estoque;

DELIMITER $$

CREATE PROCEDURE IF NOT EXISTS adicionar_lote(
    IN p_numero_lote VARCHAR(20),
    IN p_nome_marca VARCHAR(45),
    IN p_nome_produto VARCHAR(50),
    IN p_data_fabricacao DATE,
    IN p_data_validade DATE,
    IN p_quantidade INT
)
BEGIN
    DECLARE v_produto_id INT;
    DECLARE v_marca_id INT;
    DECLARE v_lote_id INT;
    DECLARE v_estoque_id INT;



    START TRANSACTION;

    -- Obter o produto_id e marca_id correspondentes
    SELECT produto_id INTO v_produto_id FROM tb_produto WHERE nome_produto = p_nome_produto;
    SELECT marca_id INTO v_marca_id FROM tb_marca WHERE nome_marca = p_nome_marca;

    -- Verificar se o produto e a marca existem
    IF v_produto_id IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Produto não encontrado.';
        ROLLBACK;
    END IF;

    IF v_marca_id IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Marca não encontrada.';
        ROLLBACK;
    END IF;

    -- Inserir o novo lote
    INSERT INTO tb_lote (produto_id, marca_id, numero_lote, data_fabricacao, data_validade, quantidade)
    VALUES (v_produto_id, v_marca_id, p_numero_lote, p_data_fabricacao, p_data_validade, p_quantidade);

    SET v_lote_id = LAST_INSERT_ID();

    -- Atualizar o estoque
    IF (SELECT COUNT(*) FROM tb_estoque WHERE lote_id = v_lote_id) = 0 THEN
        INSERT INTO tb_estoque (lote_id, quantidade)
        VALUES (v_lote_id, p_quantidade);
    END IF;

    COMMIT;
END$$

DELIMITER ;
