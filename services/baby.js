const User = require("../models/baby");

exports.insert = function (data) {
	return Baby.create(data);
};

exports.findAll = function () {
	return Baby.findAll();
};

exports.findById = function (id) {
	return Receta.findByPk(id);
};

exports.updateBaby = async function (id, data) {
	await pesoEntries.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteBabyById = async function (id) {
	const entry = await pesoEntries.findByPk(id);
	await entry.destroy();
};