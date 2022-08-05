const { Attendances } = require("../models");

const attendancesController = {
	showAll: async (_req, res) => {
		const attendancesList = await Attendances.findAll();

		res.status(200).json(attendancesList);
	},

	showById: async (req, res) => {
		const { id } = req.params;

		const attendance = await Attendances.findOne({
			where: {
				id,
			},
		});

		if (attendance === null) {
			res.status(404).json("Id não encontrado.");
			return;
		}

		res.status(200).json({
			id: attendance.id,
			data_atendimento: attendance.data_atendimento,
			paciente_id: attendance.paciente_id,
			psicologo_id: attendance.psicologo_id,
			observacao: attendance.observacao,
			createdAt: attendance.createdAt,
			updatedAt: attendance.updatedAt,
		});
	},

	insert: async (req, res) => {
		const { paciente_id, data_atendimento, observacao } = req.body;
		const therapistId = req.auth.id;

		const newAttendance = await Attendances.create({
			paciente_id,
			psicologo_id: therapistId,
			data_atendimento,
			observacao,
		});

		res.status(201).json(newAttendance);
	},
};

module.exports = attendancesController;
