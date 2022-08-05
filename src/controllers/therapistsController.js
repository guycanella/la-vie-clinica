const { Therapists } = require("../models");
const bcrypt = require("bcryptjs");

const therapistsController = {
	showAll: async (_req, res) => {
		const therapistsList = await Therapists.findAll();

		res.status(200).json(therapistsList);
	},

	showById: async (req, res) => {
		const { id } = req.params;

		const therapist = await Therapists.findOne({
			where: {
				id,
			},
		});

		if (therapist === null) {
			res.status(404).json("Id não encontrado.");
			return;
		}

		res.status(200).json({
			id: therapist.id,
			nome: therapist.nome,
			email: therapist.email,
			apresentacao: therapist.apresentacao,
			createdAt: therapist.createdAt,
			updatedAt: therapist.updatedAt,
		});
	},

	insert: async (req, res) => {
		const { nome, email, senha, apresentacao } = req.body;

		const newPassword = bcrypt.hashSync(senha, 10);

		const newTherapist = await Therapists.create({
			nome,
			email,
			senha: newPassword,
			apresentacao,
		});

		res.status(201).json(newTherapist);
	},

	update: async (req, res) => {
		const { id } = req.params;
		const { nome, email, senha, apresentacao } = req.body;

		const newPassword = bcrypt.hashSync(senha, 10);

		const obj = {
			nome,
			email,
			senha: newPassword,
			apresentacao,
		};

		await Therapists.update(obj, {
			where: {
				id,
			},
		});

		res.status(200).json(obj);
	},

	delete: async (req, res) => {
		const { id } = req.params;

		const therapist = await Therapists.findOne({
			where: {
				id,
			},
		});

		if (!therapist) {
			res.status(404).json("Id não encontrado.");
			return;
		}

		await Therapists.destroy({
			where: {
				id,
			},
		});

		res.status(204).json(therapist);
	},
};

module.exports = therapistsController;
