const mongoose = require("mongoose");

const dbConnect = () => {
	try {
		mongoose.connect("mongodb://localhost:27017/biblioteca");
		console.log(" *** CONEXION EXITOSA *** ");
	} catch (err) {
		console.error(" *** ERROR DE CONEXION *** ");
	}
};

module.exports = dbConnect;
