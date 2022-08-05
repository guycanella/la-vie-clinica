const { validate, Joi } = require("express-validation");

module.exports = validate({
	body: Joi.object({
		email: Joi.string().email().max(100).required(),
		senha: Joi.string().max(300).required(),
	}),
});
