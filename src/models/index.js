const Patients = require("./Patients");
const Therapists = require("./Therapists");
const Attendances = require("./Attendances");

Patients.hasMany(Therapists, {
	foreignKey: "atendimentos_ibfk_1",
	through: Attendances,
});

Therapists.hasMany(Patients, {
	foreignKey: "atendimentos_ibfk_2",
	through: Attendances,
});

module.exports = { Patients, Therapists, Attendances };
