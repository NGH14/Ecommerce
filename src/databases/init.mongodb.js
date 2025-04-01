const mongoose = require('mongoose');

class Database {
	constructor() {
		this.connect();
	}

	connect(type = 'mongodb') {
		mongoose
			.connect(process.env.MONGO_CONNECTION_STRING)
			.catch((err) => console.error(err));
	}

	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}
	}
}
const instanceDB = Database.getInstance();

module.exports = instanceDB;
