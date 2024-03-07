const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema(
	{
		nombre: { type: String, required: true },
		email: { type: String, required: true },
		direccion: { type: String, required: true },
	},
	{
		versionKey: false,
	}
);

const Cliente = mongoose.model("cliente", clienteSchema);

module.exports = Cliente;
