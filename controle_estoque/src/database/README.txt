Estrutura organizacional das pastas:

Controle de estoque:
|--1.Schemas
	|--Modelo lógico - Controle de estoque.pdf
|--2.Migrations
	|--001.initial.sql
	|--002.produto_triggers.sql
	|--003.fornecedor_procedures.sql
	|--004.produto_procedure.sql
	|--005.views.sql
|--3.Seeds
	|--seed.sql
README.txt



OBS: 

TODO: Adicionar um trigger para caso um produto esteja perto do seu prazo de validade enviar um aviso

TODO: BACKUP automático


/--Possíveis melhorias

TODO: Criar Registro de vendas

TODO: Adicionar trigger para cancelamento de compra e retorna o valor

TODO: Criar login de usuários

