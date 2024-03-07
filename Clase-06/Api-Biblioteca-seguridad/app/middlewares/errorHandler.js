const handlerError = (err, req, res, next) => {
	console.error(err);

	const errorStatus = err.status || 500;
	const errorResponse = {
		error: {
			message: err.message || "Error del servidor",
			code: err.code || "internal_error",
		},
	};

	res.status(errorStatus).json(errorResponse);
};

module.exports = handlerError;
