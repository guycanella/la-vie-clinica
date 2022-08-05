const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
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
