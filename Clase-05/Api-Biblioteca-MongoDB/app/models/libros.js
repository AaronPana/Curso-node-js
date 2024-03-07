const mongoose = require("mongoose");

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
