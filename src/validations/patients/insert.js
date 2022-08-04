const { validate, Joi } = require("express-validation");

module.exports = validate({
	body: Joi.object({
		nome: Joi.string().max(100).required(),
		email: Joi.string().email().max(100).required(),
		idade: Joi.string().required(),
	}),
});
