const Joi = require('joi');


const produtoSchemaCreate = Joi.object({
    nome_produto: Joi.string()
        .max(50)
        .required()
        .messages({
            'string.base': 'Nome do produto deve ser uma string.',
            'string.empty': 'Nome do produto não pode estar vazio.',
            'string.max': 'Nome do produto deve ter no máximo {#limit} caracteres.',
            'any.required': 'Nome do produto é obrigatório.'
        }),
    descricao: Joi.string()
        .allow(null, '') // Permite nulo ou vazio
        .messages({
            'string.base': 'Descrição deve ser uma string.'
        }),
    nome_marca: Joi.string()
        .max(45)
        .required()
        .messages({
            'string.base': 'Nome da marca deve ser uma string.',
            'string.empty': 'Nome da marca não pode estar vazio.',
            'string.max': 'Nome da marca deve ter no máximo {#limit} caracteres.',
            'any.required': 'Nome da marca é obrigatório.'
        }),
    nome_categoria: Joi.string()
        .required()
        .messages({
            'string.base': 'Nome da categoria deve ser uma string.',
            'string.empty': 'Nome da categoria não pode estar vazia.',
            'any.required': 'Nome da categoria é obrigatório.'
        }),
    preco_custo: Joi.number()
        .positive()
        .precision(2)
        .required()
        .messages({
            'number.base': 'Preço de custo deve ser um número.',
            'number.positive': 'Preço de custo deve ser positivo.',
            'number.precision': 'Preço de custo deve ter no máximo 2 casas decimais.',
            'any.required': 'Preço de custo é obrigatório.'
        }),
    preco_venda: Joi.number()
        .positive()
        .precision(2)
        .greater(Joi.ref('preco_custo'))
        .required()
        .messages({
            'number.base': 'Preço de venda deve ser um número.',
            'number.positive': 'Preço de venda deve ser positivo.',
            'number.precision': 'Preço de venda deve ter no máximo 2 casas decimais.',
            'number.greater': 'Preço de venda deve ser maior que o preço de custo.',
            'any.required': 'Preço de venda é obrigatório.'
        }),
    quantidade: Joi.number()
        .integer()
        .min(0)
        .required()
        .messages({
            'number.base': 'Quantidade deve ser um número.',
            'number.integer': 'Quantidade deve ser um número inteiro.',
            'number.min': 'Quantidade não pode ser negativa.',
            'any.required': 'Quantidade é obrigatória.'
        }),
    codigo_barra: Joi.string()
        .length(13)
        .pattern(/^[0-9]+$/)
        .required()
        .messages({
            'string.base': 'Código de barras deve ser uma string.',
            'string.empty': 'Código de barras não pode estar vazio.',
            'string.length': 'Código de barras deve ter exatamente {#limit} dígitos.',
            'string.pattern.base': 'Código de barras deve conter apenas números.',
            'any.required': 'Código de barras é obrigatório.'
        })
});

const produtoSchemaUpdate = produtoSchemaCreate.keys({
    produto_id: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
        'number.base': 'Produto ID deve ser um número.',
        'number.integer': 'Produto ID deve ser um número inteiro.',
        'number.positive': 'Produto ID deve ser um número positivo.',
        'any.required': 'Produto ID é obrigatório.'
    })
});

const validarProdutoCriacao = (data) => {
    return produtoSchemaCreate.validate(data, { abortEarly: false });
};

const validarProdutoAtualizacao = (data) => {
    return produtoSchemaUpdate.validate(data, {abortEarly: false});
}

module.exports = { validarProdutoCriacao, validarProdutoAtualizacao };
