const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema(
	{
		nombre: { type: String, required: true },
		descripcion: { type: String, required: true },
	},
	{
		versionKey: false,
	}
);

const Categoria = mongoose.model("categoria", categoriaSchema);

module.exports = Categoria;
