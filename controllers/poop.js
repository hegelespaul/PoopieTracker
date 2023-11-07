const { insert, findAll, findById, findByScore } = require('../services/baby');

exports.createPoop = async function (request, response) {
    const { date, score, relatedFood } = request.body;
    const newBaby = await insert({ date, score, relatedFood });
    response.status(201).json(newPoop);
};

exports.getPoops = async function (request, response) {
    const poops = await findAll();
    response.status(200).json(poops);
};

exports.getPoopByDate = async function (request, response) {
    const { date } = request.params;
    const poop = await findByDate(date);
    response.status(200).json(poop);
};

exports.getPoopByScore = async function (request, response) {
    const { score } = request.params;
    const poops = await findByScore(score);
    response.status(200).json(poops)
}

exports.updatePoop = async function (request, response) {
	const { date, score, realtedFood } = request.body;
	const { id } = request.params;

	await update(id, { date, score, realtedFood });
	response.status(204).end();
};

exports.deletePoopById = async function (request, response) {
	const { id } = request.params;
	await deleteById(id);
	response.status(204).end();
};
