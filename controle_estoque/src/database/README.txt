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

TODO: Adicionar um trigger para que a quantidade inserida não seja negativa

TODO: Adicionar trigger para quando atualizar o preços de custo e venda, a venda não seja menor que o custo

TODO: Adicionar um atributo de data de recebimento da compra e prazo de validade


/--Possíveis melhorias

TODO: Registro de vendas

TODO: Registrar saída de produto

TODO: Adicionar trigger para cancelamento de compra e retorna o valor

TODO: Adicionar um trigger para caso um produto esteja perto do seu prazo de validade enviar um aviso

TODO: Criar tabela para quantidade de estoque mínimo e máximo

TODO: Adicionar trigger para caso o estoque esteja perto do limite min e max

TODO: Registro de movimentações de alterações no estoque

TODO: Criar login de usuários

TODO: BACKUP automático
