const express = require("express");

const therapistsController = require("../controllers/therapistsController");
const therapistsInsertValidation = require("../validations/therapists/insert");
const therapistsUpdateValidation = require("../validations/therapists/update");

const patientsController = require("../controllers/patientsController");
const patientsInsertValidation = require("../validations/therapists/insert");
const patientstsUpdateValidation = require("../validations/therapists/update");

const routes = express.Router();

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

module.exports = routes;
