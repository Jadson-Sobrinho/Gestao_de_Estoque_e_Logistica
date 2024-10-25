USE db_controle_estoque;


DELIMITER $$
/*Quando a quantidade de produtos é atualizada (saída de estoque),
o trigger verifica se a operação resulta em uma quantidade menor.*/
CREATE TRIGGER IF NOT EXISTS before_quantidade_update
	BEFORE UPDATE ON tb_produto
	FOR EACH ROW
	BEGIN
		IF(NEW.quantidade < OLD.quantidade) THEN
			IF(NEW.quantidade < 0) THEN
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = 'Erro: Quantidade não disponivel';
			END IF;
		END IF;
	END$$
	
DELIMITER ;


DELIMITER $$
/*Evitar que produtos sejam cadastrados com um preço de venda menor do que o preço de custo*/
CREATE TRIGGER IF NOT EXISTS before_preco_venda_insert
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
CREATE TRIGGER IF NOT EXISTS before_preco_venda_update
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

