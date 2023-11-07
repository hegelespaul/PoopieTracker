const { insert, findAll, findById } = require('../services/baby');

exports.createBaby = async function (request, response) {
	const { age, firstName, lastName, email, username, password } = request.body;
	const newBaby = await insert({ age, firstName, lastName, email, username, password });
	response.status(201).json(newBaby);
};

exports.getBabies = async function (request, response) {
	const babies = await findAll();
	response.status(200).json(babies);
};

exports.getBabyById = async function (request, response) {
	const { id } = request.params;
	const baby = await findById(id);
	response.status(200).json(baby);
};

exports.updateBaby = async function (request, response) {
	const { name, birthDate, gender } = request.body;
	const { id } = request.params;

	await update(id, { name, birthDate, gender });
	response.status(204).end();
};

exports.deleteBabyById = async function (request, response) {
	const { id } = request.params;
	await deleteById(id);
	response.status(204).end();
};