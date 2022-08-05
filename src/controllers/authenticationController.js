const { Therapists } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");

const authController = {
	login: async (req, res) => {
		const { email, senha } = req.body;

		const therapist = await Therapists.findOne({
			where: {
				email,
			},
		});

		const isCorrectPass = bcrypt.compareSync(senha, therapist.senha);

		if (!therapist || !isCorrectPass) {
			return res
				.status(401)
				.json("E-mail ou senha inválido, verifique e tente novamente.");
		}

		const token = jwt.sign(
			{
				id: therapist.id,
				nome: therapist.nome,
				email: therapist.email,
			},
			secret.key
		);

		return res.status(200).json(token);
	},
};

module.exports = authController;
