const Sequelize = require("sequelize");

const DB_NAME = "clinica_la_vie";
const DB_USER = "root";
const DB_PASS = "1234";
const DB_CONFIG = {
	dialect: "mysql",
	host: "localhost",
	port: 3306,
};

let db = {};

try {
	db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
	console.log(`Error to connect to the database: ${error}`);
}

const hasConnection = async () => {
	try {
		await db.authenticate();
		console.log("Databse connected.");
	} catch (error) {
		console.log(`Error to connect to the database: ${error}`);
	}
};

Object.assign(db, { hasConnection });

module.exports = db;
