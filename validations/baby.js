const Joi = require('joi');

exports.schemaCreateBaby = Joi.object({
    name: Joi.string().required().min(2).max(50)
        .error(new Error('Name must be between 2 and 50 charcaters long')),

    birthDate: Joi.date().required()
        .error(new Error('Data must be a valid date')),

    gender: Joi.string().required().length(1)
        .error(new Error('Gender must be letters M, F or O')),
});

exports.schemaUpdateBaby = Joi.object({
    name: Joi.string().min(2).max(50)
        .error(new Error('Name must be between 2 and 50 charcaters long')),

    birthDate: Joi.date()
        .error(new Error('Data must be a valid date')),

    gender: Joi.string().length(1)
        .error(new Error('Gender must be letters M, F or O')),
});

exports.paramsSchema = Joi.object({
    id: Joi.number().required(),
})