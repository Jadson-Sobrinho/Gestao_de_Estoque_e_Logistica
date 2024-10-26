const Joi = require('joi');


const fornecedorSchema = Joi.object({
    razao_social: Joi.string()
        .min(3)
        .max(100)
        .required()
        .messages({
            'string.base': 'Razão social deve ser uma string.',
            'string.empty': 'Razão social não pode estar vazia.',
            'string.min': 'Razão social deve ter pelo menos {#limit} caracteres.',
            'string.max': 'Razão social deve ter no máximo {#limit} caracteres.',
            'any.required': 'Razão social é obrigatória.'
        }),
    CNPJ: Joi.string()
        .length(14)
        .pattern(/^[0-9]+$/)
        .required()
        .messages({
            'string.base': 'CNPJ deve ser uma string.',
            'string.empty': 'CNPJ não pode estar vazio.',
            'string.length': 'CNPJ deve conter {#limit} dígitos.',
            'any.required': 'CNPJ é obrigatório.'
        }),
    cep: Joi.string()
        .length(8)
        .pattern(/^[0-9]+$/)
        .required()
        .messages({
            'string.base': 'CEP deve ser uma string.',
            'string.empty': 'CEP não pode estar vazio.',
            'string.length': 'CEP deve conter {#limit} dígitos.',
            'any.required': 'CEP é obrigatório.'
        }),
    uf: Joi.string()
        .length(2)
        .required()
        .messages({
            'string.base': 'UF deve ser uma string.',
            'string.empty': 'UF não pode estar vazia.',
            'string.length': 'UF deve conter {#limit} caracteres.',
            'any.required': 'UF é obrigatória.'
        }),
    cidade: Joi.string()
        .min(2)
        .max(100)
        .required()
        .messages({
            'string.base': 'Cidade deve ser uma string.',
            'string.empty': 'Cidade não pode estar vazia.',
            'string.min': 'Cidade deve ter pelo menos {#limit} caracteres.',
            'string.max': 'Cidade deve ter no máximo {#limit} caracteres.',
            'any.required': 'Cidade é obrigatória.'
        }),
    bairro: Joi.string()
        .min(2)
        .max(100)
        .required()
        .messages({
            'string.base': 'Bairro deve ser uma string.',
            'string.empty': 'Bairro não pode estar vazio.',
            'string.min': 'Bairro deve ter pelo menos {#limit} caracteres.',
            'string.max': 'Bairro deve ter no máximo {#limit} caracteres.',
            'any.required': 'Bairro é obrigatório.'
        }),
    numero: Joi.string()
        .required()
        .messages({
            'string.base': 'Número deve ser uma string.',
            'string.empty': 'Número não pode estar vazio.',
            'any.required': 'Número é obrigatório.'
        }),
    telefone: Joi.string()
        .required()
        .messages({
            'string.base': 'Telefone deve ser uma string.',
            'string.empty': 'Telefone não pode estar vazio.',
            'any.required': 'Telefone é obrigatório.'
        }),
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.base': 'Email deve ser uma string.',
            'string.empty': 'Email não pode estar vazio.',
            'string.email': 'Email deve ser válido.',
            'any.required': 'Email é obrigatório.'
        }),
    nome_marca: Joi.string()
        .min(2)
        .max(100)
        .required()
        .messages({
            'string.base': 'Nome da marca deve ser uma string.',
            'string.empty': 'Nome da marca não pode estar vazio.',
            'string.min': 'Nome da marca deve ter pelo menos {#limit} caracteres.',
            'string.max': 'Nome da marca deve ter no máximo {#limit} caracteres.',
            'any.required': 'Nome da marca é obrigatório.'
        }),
});


const validarFornecedor = (data) => {
    return fornecedorSchema.validate(data, { abortEarly: false });
};

module.exports = {validarFornecedor};
