const mongoose = require("mongoose");

const usuariosSchema = mongoose.Schema(
	{
		nombre: String,
		mail: String,
		telefono: String,
		direccion: String,
	},
	{
		versionKey: false,
	}
);

const Usuario = mongoose.model("usuarios", usuariosSchema);

module.exports = Usuario;
