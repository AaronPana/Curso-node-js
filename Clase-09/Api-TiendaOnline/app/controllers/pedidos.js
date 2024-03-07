const Pedido = require("../models/pedido");

module.exports.getAllPedidos = async (req, res) => {
	try {
		const pedidos = await Pedido.find()
			.populate("cliente_id")
			.populate("productos", {
				nombre: 1,
				descripcion: 1,
				precio: 1,
			});

		res.json(pedidos);
	} catch (error) {
		res.status(500).json({ error: "Error al obtener los pedidos" });
	}
};

module.exports.getOnePedido = async (req, res) => {
	try {
		const pedido = await Pedido.findById(req.params.id)
			.populate("cliente_id")
			.populate("productos", {
				nombre: 1,
				descripcion: 1,
				precio: 1,
			});

		if (!pedido) {
			return res.status(404).json({ error: "Pedido no encontrado" });
		}
		res.json(pedido);
	} catch (error) {
		res.status(500).json({ error: "Error al obtener el pedido" });
	}
};

module.exports.createPedido = async (req, res) => {
	try {
		const { productos } = req.body;
		if (!productos) {
			return res.status(404).json({ error: "Productos no encontrados" });
		}

		const nuevoPedido = new Pedido(req.body);
		nuevoPedido.total = productos.length;
		await nuevoPedido.save();
		res.status(201).json(nuevoPedido);
	} catch (error) {
		res.status(400).json({ error: "Error al crear pedido" });
	}
};

module.exports.deletePedido = async (req, res) => {
	try {
		const pedido = await Pedido.findByIdAndDelete(req.params.id)
			.populate("cliente_id")
			.populate("productos", {
				nombre: 1,
				descripcion: 1,
				precio: 1,
			});
		if (!pedido) {
			return res.status(404).json({ error: "Pedido no encontrado" });
		}
		res.json({ message: "Pedido eliminado correctamente", pedido });
	} catch (error) {
		res.status(500).json({ error: "Error al eliminar pedido" });
	}
};
