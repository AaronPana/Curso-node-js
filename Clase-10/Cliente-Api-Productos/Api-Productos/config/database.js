const mongoose = require("mongoose");

// Cargamos las variables de entorno propias del proyecto en '.env'
require("dotenv").config();

const dbConnect = () => {
	try {
		mongoose.connect(process.env.MONGO_DB);
		console.log(" *** CONEXION EXITOSA *** ");
	} catch (err) {
		console.error(" *** ERROR DE CONEXION *** ");
	}
};

module.exports = dbConnect;
