const mongoose = require("mongoose");

// Cargamos las variables de entorno propias del proyecto en '.env'
require("dotenv").config();

mongoose.connect(process.env.MONGO_DB);

const librosSchema = mongoose.Schema(
	{
		titulo: String,
		autor: String,
	},
	{
		versionKey: false,
	}
);

const Libro = mongoose.model("libros", librosSchema);

module.exports = Libro;
