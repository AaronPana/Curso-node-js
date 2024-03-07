const Cliente = require("../models/cliente");

module.exports.getAllClientes = async (req, res) => {
	try {
		const clientes = await Cliente.find();
		res.json(clientes);
	} catch (error) {
		res.status(500).json({ error: "Error al obtener los clientes" });
	}
};

module.exports.getOneCliente = async (req, res) => {
	try {
		const cliente = await Cliente.findById(req.params.id);
		if (!cliente) {
			return res.status(404).json({ error: "Cliente no encontrado" });
		}
		res.json(cliente);
	} catch (error) {
		res.status(500).json({ error: "Error al obtener el cliente" });
	}
};

module.exports.createCliente = async (req, res) => {
	try {
		const nuevoCliente = new Cliente(req.body);
		await nuevoCliente.save();
		res.status(201).json(nuevoCliente);
	} catch (error) {
		res.status(400).json({ error: "Error al crear cliente" });
	}
};

module.exports.deleteCliente = async (req, res) => {
	try {
		const cliente = await Cliente.findByIdAndDelete(req.params.id);
		if (!cliente) {
			return res.status(404).json({ error: "Cliente no encontrado" });
		}
		res.json({ message: "Cliente eliminado correctamente", cliente });
	} catch (error) {
		res.status(500).json({ error: "Error al eliminar cliente" });
	}
};
