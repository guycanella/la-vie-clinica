const express = require("express");

const therapistsController = require("../controllers/therapistsController");
const therapistsInsertValidation = require("../validations/therapists/insert");
const therapistsUpdateValidation = require("../validations/therapists/update");

const patientsController = require("../controllers/patientsController");
const patientsInsertValidation = require("../validations/patients/insert");
const patientstsUpdateValidation = require("../validations/patients/update");

const attendancesController = require("../controllers/attendancesController");

const authController = require("../controllers/authenticationController");
const authLoginValidation = require("../validations/auth/login");
const auth = require("../middlewares/auth");

const routes = express.Router();

// ROUTE FOR LOGIN
routes.post("/login", authLoginValidation, authController.login);

// ROUTES FOR THERAPISTS
routes.get("/psicologos", therapistsController.showAll);
routes.get("/psicologos/:id", therapistsController.showById);
routes.post(
	"/psicologos",
	therapistsInsertValidation,
	therapistsController.insert
);
routes.put(
	"/psicologos/:id",
	therapistsUpdateValidation,
	therapistsController.update
);
routes.delete("/psicologos/:id", therapistsController.delete);

// ROUTES FOR PATIENTS
routes.get("/pacientes", patientsController.showAll);
routes.get("/pacientes/:id", patientsController.showById);
routes.post("/pacientes", patientsInsertValidation, patientsController.insert);
routes.put(
	"/pacientes/:id",
	patientstsUpdateValidation,
	patientsController.update
);
routes.delete("/pacientes/:id", patientsController.delete);

// ROUTES FOR ATTENDANCES
routes.get("/atendimentos", attendancesController.showAll);
routes.get("/atendimentos/:id", attendancesController.showById);
routes.post("/atendimentos", auth, attendancesController.insert);

module.exports = routes;
