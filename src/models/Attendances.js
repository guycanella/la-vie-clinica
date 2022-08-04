const db = require("../database");
const Patients = require("./Patients");
const Therapists = require("./Therapists");

const { DataTypes } = require("sequelize");

const Attendances = db.define(
	"Attendances",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		data_atendimento: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		paciente_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Patients,
				key: "id",
			},
		},
		psicologo_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Therapists,
				key: "id",
			},
		},
		observacao: {
			type: DataTypes.STRING(1000),
			allowNull: false,
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	},
	{
		tableName: "atendimentos",
	}
);

module.exports = Attendances;
