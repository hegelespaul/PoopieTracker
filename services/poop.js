const Poop = require("../models/poop");

exports.insert = function (data) {
	return Poop.create(data);
};

exports.findByDate = function (date) {     
	return Poop.findAll({
        where: {date: date}
    });
}

exports.findAll = function () {
	return Poop.findAll();
};

exports.findByScore = function (score) {
	return Poop.findOne({
		where: {
			score,
		},
	});
};

exports.updatePoop = async function (id, data) {
	await pesoEntries.update(data, {
		where: {
			id,
		},
	});
};

exports.deletePoopById = async function (id) {
	const entry = await pesoEntries.findByPk(id);
	await entry.destroy();
};