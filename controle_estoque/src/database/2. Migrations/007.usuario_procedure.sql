USE db_controle_estoque;

DELIMITER $$

CREATE PROCEDURE IF NOT EXISTS Criar_Usuario(
IN p_login VARCHAR(50),
IN p_senha CHAR(64)

)

BEGIN
START TRANSACTION;
	
	INSERT INTO tb_usuario (login, senha)
	VALUES (p_login, p_senha);

COMMIT;
END$$

DELIMITER ;