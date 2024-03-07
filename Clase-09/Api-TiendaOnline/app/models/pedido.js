const mongoose = require("mongoose");

const PedidoSchema = new mongoose.Schema(
	{
		cliente_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "cliente",
			required: true,
		},
		fecha: { type: Date, default: Date.now },
		productos: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "producto",
				required: true,
			},
		],
		total: { type: Number },
		estado: {
			type: String,
			enum: ["Pendiente", "Enviado", "Entregado"],
			default: "Pendiente",
		},
	},
	{
		versionKey: false,
	}
);

const Pedido = mongoose.model("pedido", PedidoSchema);

module.exports = Pedido;
