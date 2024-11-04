USE db_controle_estoque;

DELIMITER $$

CREATE PROCEDURE IF NOT EXISTS cadastrar_fornecedor (

    /* Parâmetros do fornecedor */
    IN p_razao_social VARCHAR(50),
    IN p_CNPJ CHAR(14),

    /* Parâmetros do endereço */
    IN p_cep CHAR(8),
    IN p_uf CHAR(2),
    IN p_cidade VARCHAR(35),
    IN p_bairro VARCHAR(35),

    /* Parâmetros do número de endereço do fornecedor */
    IN p_numero VARCHAR(4),

    /* Parâmetros do telefone do fornecedor */
    IN p_telefone CHAR(11),

    /* Parâmetros do email do fornecedor */
    IN p_email VARCHAR(50),

    /* Parâmetros da marca do fornecedor */
    IN p_nome_marca VARCHAR(45)
)

BEGIN
    DECLARE v_marca_id INT;
    DECLARE v_fornecedor_id INT;
    DECLARE v_endereco_id INT;

    START TRANSACTION;

    /* Verificar se a marca já existe */
    SELECT marca_id INTO v_marca_id FROM tb_marca WHERE nome_marca = p_nome_marca;

    IF v_marca_id IS NULL THEN
        /* Inserir marca caso não exista */
        INSERT INTO tb_marca (nome_marca)
        VALUES (p_nome_marca);
        SET v_marca_id = LAST_INSERT_ID();
    END IF;

    /* Inserir fornecedor */
    INSERT INTO tb_fornecedor (razao_social, CNPJ, marca_id) 
    VALUES (p_razao_social, p_CNPJ, v_marca_id);
    
    /* Recuperar o id do último fornecedor inserido */
    SET v_fornecedor_id = LAST_INSERT_ID();
    
    /* Inserir endereço */
    INSERT INTO tb_endereco (cep, uf, cidade, bairro) 
    VALUES (p_cep, p_uf, p_cidade, p_bairro);
    
    /* Recuperar o id do último endereço inserido */
    SET v_endereco_id = LAST_INSERT_ID();
    
    /* Inserir relação entre fornecedor e endereço */
    INSERT INTO tb_endereco_fornecedor (endereco_id, fornecedor_id, numero) 
    VALUES (v_endereco_id, v_fornecedor_id, p_numero);
    
    /* Inserir telefone do fornecedor */
    INSERT INTO tb_telefone_fornecedor (fornecedor_id, telefone) 
    VALUES (v_fornecedor_id, p_telefone);
    
    /* Inserir email do fornecedor */
    INSERT INTO tb_email_fornecedor (fornecedor_id, email) 
    VALUES (v_fornecedor_id, p_email);
    
    COMMIT;

END$$

DELIMITER ;




DELIMITER $$
CREATE PROCEDURE IF NOT EXISTS Update_fornecedor_info (

/*Parametros do fornecedor*/
IN p_razao_social VARCHAR(50),
IN p_CNPJ CHAR(14),

/*Parametros do endereco*/
IN p_cep CHAR(8),
IN p_uf CHAR(2),
IN p_cidade VARCHAR(35),
IN p_bairro VARCHAR(35),

/*Parametros do numero de endereco do fornecedor*/
IN p_numero VARCHAR(4),

/*Parametros do telefone do fornecedor*/
IN p_telefone CHAR(11),

/*Parametros do email do fornecedor*/
IN p_email VARCHAR(50),

/*Parametros da marca do fornecedor*/
IN p_nome_marca VARCHAR(45)

)

BEGIN

DECLARE v_fornecedor_id INT;
DECLARE v_marca_id INT;

SELECT fornecedor_id INTO v_fornecedor_id FROM tb_fornecedor WHERE CNPJ = p_CNPJ;
SELECT marca_id INTO v_marca_id FROM tb_marca WHERE marca_id = p_nome_marca;

START TRANSACTION;

/*Atualizar atributos da tabela tb_fornecedor*/
UPDATE tb_fornecedor
SET razao_social = p_razao_social, CNPJ = p_CNPJ
WHERE fornecedor_id = v_fornecedor_id;

/*Atualizar atributos da tabela tb_endereco*/
UPDATE tb_endereco
SET cep = p_cep, uf = p_uf, cidade = p_cidade, bairro = p_bairro
WHERE endereco_id = (SELECT endereco_id FROM tb_endereco_fornecedor WHERE fornecedor_id = v_fornecedor_id);

/*Atualizar atributos da tabela  tb_endereco_fornecedor*/
UPDATE tb_endereco_fornecedor
SET numero = p_numero
WHERE fornecedor_id = v_fornecedor_id;

/*Atualizar atributos da tabela tb_telefone_fornecedor*/
UPDATE tb_telefone_fornecedor
SET telefone = p_telefone
WHERE fornecedor_id = v_fornecedor_id;

/*Atualizar atributos da tabela tb_email_fornecedor*/
UPDATE tb_email_fornecedor
SET email = p_email
WHERE fornecedor_id = v_fornecedor_id;

/*Atualizar atributos da tabela tb_marca*/
UPDATE tb_marca
SET nome_marca = p_nome_marca
WHERE marca_id = v_marca_id;

COMMIT;
ROLLBACK;
END$$

DELIMITER ;
