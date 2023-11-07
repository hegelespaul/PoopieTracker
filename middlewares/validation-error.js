// Manejo de errores
// Los middlewares de manejo de errores siempren reciben 4 parámetros
module.exports = function (err, request, response, next) {
	console.log(err)
	if (err & err.error && err.error.isJoi) {
		response.status(400).json({
			message: 'Los datos de entrada son inválidos',
			messagedev: 'El middleware de validación arrojó el siguiente error',
			code: 'ERR:VALIDATION',
			details: err.error.details,
		});
	} else {
		next(err)
	}
};