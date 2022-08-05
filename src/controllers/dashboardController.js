const { Attendances, Patients, Therapists } = require("../models");

const dashboardController = {
	patientsNumber: async (_req, res) => {
		const patientsList = await Patients.findAll();

		res.status(200).json(patientsList.length);
	},

	therapistsNumber: async (_req, res) => {
		const therapistsList = await Therapists.findAll();

		res.status(200).json(therapistsList.length);
	},

	attendancesNumber: async (_req, res) => {
		const attendancesList = await Attendances.findAll();

		res.status(200).json(attendancesList.length);
	},

	meanAttendancesPerTherapist: async (req, res) => {
		const attendancesList = await Attendances.findAll();

		const meanAtt = attendancesList.filter(
			(attendance) => attendance.psicologo_id === req.auth.id
		);

		res.status(200).json(meanAtt.length / attendancesList.length);
	},
};

module.exports = dashboardController;
