const Patients = require('../models')
const bcrypt = require('bcryptjs')

const patientsController = {
	showAll: (_req, res) => {
		const patientsList = await Patients.findAll()

		res.status(200).json(patientsList)
	},

	showById: async (req, res) => {
		const { id } = req.params

		const patient = await Patients.findOne({
			where: {
				id,
			}
		})

		if (patient === null) {
			res.status(404).json("Id não encontrado.")
			return
		}

		res.status(200).json({
			id: patient.id,
			nome: patient.nome,
			email: patient.email,
			apresentacao: patient.apresentacao,
			createdAt: patient.createdAt,
			updatedAt: patient.updatedAt
		})
	},

	insert: (req, res) => {
		const { nome, email, idade } = req.body

		const newPatient = await Patients.create({
			nome,
			email,
			idade
		})

		res.status(201).json(newPatient)
	},

	update: async (req, res) => {
		const { id } = req.params
		const { nome, email, idade } = req.body

		const obj = {
			nome,
			email,
			idade
		}

		await Patients.update(obj, {
			where: {
				id
			}
		})

		res.status(200).json(obj)
	},

	delete: (req, res) => {
		const { id } = req.params

		const patient = await Patients.findOne({
			where: {
				id,
			}
		})

		if (!patient) {
			res.status(404).json("Id não encontrado.")
			return
		}

		await Patients.destroy({
			where: {
				id
			}
		})

		res.status(204).json(patient)
	},
};

module.exports = patientsController;
