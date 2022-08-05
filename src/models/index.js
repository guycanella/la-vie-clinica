const Patients = require("./Patients");
const Therapists = require("./Therapists");
const Attendances = require("./Attendances");

Patients.belongsToMany(Therapists, {
	foreignKey: "paciente_id",
	through: Attendances,
});

Therapists.belongsToMany(Patients, {
	foreignKey: "psicologo_id",
	through: Attendances,
});

module.exports = { Patients, Therapists, Attendances };
