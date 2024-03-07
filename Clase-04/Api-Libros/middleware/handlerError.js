const handlerError = (err, req, res, next) => {
	console.error(err);
	res.status(err.status || 500).json({
		error: err.message || "Se ha producido un error",
	});
};

module.exports = handlerError;
