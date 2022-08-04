const db = require("../database");

const { DataTypes } = require("sequelize");

const Therapists = db.define(
	"Therapists",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		nome: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true,
		},
		senha: {
			type: DataTypes.STRING(300),
			allowNull: false,
		},
		apresentacao: {
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
		tableName: "psicologos",
	}
);

module.exports = Therapists;
