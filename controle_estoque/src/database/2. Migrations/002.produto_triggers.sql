USE db_controle_estoque;


DELIMITER $$

CREATE TRIGGER IF NOT EXISTS after_insert_movimentacao
AFTER INSERT ON tb_movimentacao_estoque
FOR EACH ROW
BEGIN
    DECLARE produto_id_selecionado INT;
    DECLARE quantidade_disponivel INT;

    -- Seleciona o produto correspondente ao lote que foi inserido
    SET produto_id_selecionado = (
        SELECT produto_id
        FROM tb_lote
        WHERE lote_id = NEW.lote_id
    );

    -- Seleciona o lote a ser atualizado
    IF NEW.tipo_movimento = 'Entrada' THEN
        -- Se um lote foi encontrado, atualiza a quantidade
        IF produto_id_selecionado IS NOT NULL THEN
            UPDATE tb_estoque
            SET quantidade = quantidade + NEW.quantidade
            WHERE lote_id = NEW.lote_id; -- Utilizando o lote_id diretamente
        ELSE
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Erro: Nenhum lote disponível para a entrada.';
        END IF;

    ELSEIF NEW.tipo_movimento = 'Saída' THEN
        -- Verifica se o lote foi encontrado
        IF produto_id_selecionado IS NOT NULL THEN
            -- Verifica se há quantidade suficiente antes de subtrair
            SELECT quantidade INTO quantidade_disponivel
            FROM tb_estoque
            WHERE lote_id = NEW.lote_id; -- Utilizando o lote_id diretamente

            IF quantidade_disponivel >= NEW.quantidade THEN
                UPDATE tb_estoque
                SET quantidade = quantidade - NEW.quantidade
                WHERE lote_id = NEW.lote_id; -- Utilizando o lote_id diretamente
            ELSE
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'Erro: Quantidade insuficiente no lote para a saída.';
            END IF;
        ELSE
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Erro: Nenhum lote disponível para a saída.';
        END IF;
    END IF;
END$$

DELIMITER ;



DELIMITER $$

CREATE TRIGGER IF NOT EXISTS after_delete_movimentacao
AFTER DELETE ON tb_movimentacao_estoque
FOR EACH ROW
BEGIN
    -- Desfaz o ajuste dependendo do tipo de movimento
    IF OLD.tipo_movimento = 'Entrada' THEN
        UPDATE tb_estoque
        SET quantidade = quantidade - OLD.quantidade
        WHERE lote_id = OLD.lote_id;
    ELSEIF OLD.tipo_movimento = 'Saída' THEN
        UPDATE tb_estoque
        SET quantidade = quantidade + OLD.quantidade
        WHERE lote_id = OLD.lote_id;
    END IF;
END$$


DELIMITER ;

DELIMITER $$
/*Evitar que produtos sejam cadastrados com um preço de venda menor do que o preço de custo*/
CREATE TRIGGER IF NOT EXISTS before_insert_preco_venda
	BEFORE INSERT ON tb_produto
	FOR EACH ROW
	BEGIN
		IF(NEW.preco_venda < NEW.preco_custo) THEN
		SIGNAL SQLSTATE '45000'
		SET MESSAGE_TEXT = 'Erro: O preço de venda não pode ser menor que o preço de custo';
		END IF;	
	END$$
	
DELIMITER ;

DELIMITER $$
/*Evitar que produtos sejam cadastrados com um preço de venda menor do que o preço de custo*/
CREATE TRIGGER IF NOT EXISTS before_update_preco_venda
	BEFORE UPDATE ON tb_produto
	FOR EACH ROW
	BEGIN
	
		-- Verifica se o novo preço de venda é menor que o preço de custo (novo ou antigo)
		IF NEW.preco_venda < NEW.preco_custo OR NEW.preco_venda < OLD.preco_custo THEN
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = 'Erro: O preço de venda não pode ser menor que o preço de custo';
		END IF;

		-- Verifica se o novo preço de custo é maior que o preço de venda (novo ou antigo)
		IF NEW.preco_custo > NEW.preco_venda OR NEW.preco_custo > OLD.preco_venda THEN
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = 'Erro: O preço de custo não pode ser maior que o preço de venda';
		END IF;
	END$$

DELIMITER ;


DELIMITER $$

CREATE TRIGGER IF NOT EXISTS after_update_estoque
AFTER UPDATE ON tb_estoque
FOR EACH ROW
BEGIN
    DECLARE v_produto_id INT;

    -- Obtém o produto_id associado ao lote
    SELECT produto_id INTO v_produto_id
    FROM tb_lote
    WHERE lote_id = NEW.lote_id;

    -- Verifica se o produto_id foi encontrado
    IF v_produto_id IS NOT NULL THEN
        -- Verifica se a quantidade está próxima do limite mínimo
        IF NEW.quantidade <= 30 THEN
            INSERT INTO tb_estoque_log (produto_id, quantidade, tipo_alerta)
            VALUES (v_produto_id, NEW.quantidade, 'Limite Mínimo');    

        -- Verifica se a quantidade está próxima do limite máximo
        ELSEIF NEW.quantidade >= 300 THEN
            INSERT INTO tb_estoque_log (produto_id, quantidade, tipo_alerta)
            VALUES (v_produto_id, NEW.quantidade, 'Limite Máximo');
        END IF;
    END IF;
END$$

DELIMITER ;



DELIMITER $$

CREATE TRIGGER IF NOT EXISTS after_insert_lote
AFTER INSERT ON tb_lote
FOR EACH ROW
BEGIN
    -- Insere o novo lote no estoque com a quantidade inicial igual à do lote
    INSERT INTO tb_estoque (lote_id, quantidade)
    VALUES (NEW.lote_id, NEW.quantidade);  -- Define a quantidade inicial conforme a quantidade do lote
END$$

DELIMITER ;



DELIMITER $$

CREATE TRIGGER IF NOT EXISTS after_update_produto
AFTER UPDATE ON tb_produto
FOR EACH ROW
BEGIN
	
	INSERT INTO tb_produto_log (produto_id, preco_custo, preco_venda)
	VALUES (NEW.produto_id, NEW.preco_custo, NEW.preco_venda);
	
	
END$$


DELIMITER ;