USE db_controle_estoque;

DELIMITER $$

CREATE PROCEDURE IF NOT EXISTS Criar_Usuario(
    IN p_login VARCHAR(50),
    IN p_senha CHAR(64)
)
BEGIN
    DECLARE usuario_existe INT;

    START TRANSACTION;

    -- Verificar se o usuário já existe
    SELECT COUNT(*) INTO usuario_existe
    FROM tb_usuario
    WHERE login = p_login;

    IF usuario_existe > 0 THEN
        SELECT 'Usuário já cadastrado' AS Mensagem;
        ROLLBACK;
    ELSE
        -- Inserir o novo usuário
        INSERT INTO tb_usuario (login, senha)
        VALUES (p_login, p_senha);

        COMMIT;
        SELECT 'Usuário cadastrado com sucesso' AS Mensagem;
    END IF;
END$$

DELIMITER ;
