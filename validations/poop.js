const Joi = require('joi');

exports.schemaCreatePoop = Joi.object({
    relatedFood: Joi.string().required().min(2).max(50)
        .error(new Error('RelatedFood must be between 2 and 50 charcaters long')),

    date: Joi.date().required()
        .error(new Error('Data must be a valid date')),

    score: Joi.number().required().min(1).max(5)
        .error(new Error('Score must be between 1 to 5 starts')),
});

exports.schemaUpdatePoop = Joi.object({
    relatedFood: Joi.string().min(2).max(50)
        .error(new Error('RelatedFood must be between 2 and 50 charcaters long')),

    date: Joi.date()
        .error(new Error('Data must be a valid date')),

    score: Joi.number().min(1).max(5)
        .error(new Error('Score must be between 1 to 5 starts')),
});

exports.paramsSchema = Joi.object({
    id: Joi.number().required(),
})