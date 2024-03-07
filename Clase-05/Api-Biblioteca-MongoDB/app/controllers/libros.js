const libroModel = require("../models/libros");

const getItems = async (req, res) => {
	try {
		const libros = await libroModel.find();
		res.json({ data: libros });
	} catch (err) {
		res.status(500).json({ error: "Error al consultar los libros" });
	}
};

const getItem = async (req, res) => {
	try {
		const libroId = req.params.id;
		const libro = await libroModel.findById(libroId);
		res.json({ data: libro });
	} catch (err) {
		res.status(500).json({ error: "No existe el libro buscado" });
	}
};

const createItem = async (req, res) => {
	try {
		const libroNuevo = new libroModel(req.body);
		await libroNuevo.save();
		res.json({ libroNuevo });
	} catch (err) {
		res.status(500).json({ error: "Error al crear el libro" });
	}
};

const updateItem = async (req, res) => {
	try {
		const libroId = req.params.id;
		const libro = await libroModel.findByIdAndUpdate(libroId, req.body, {
			new: true,
		});
		res.json({ libro });
	} catch (err) {
		res.status(500).json({ error: "Error al actualizar el libro" });
	}
};

const deleteItem = async (req, res) => {
	try {
		const libroId = req.params.id;
		await libroModel.findByIdAndDelete(libroId);
		res.json({ message: "Libro eliminado correctamente" });
	} catch (err) {
		res.status(500).json({ error: "Error al eliminar el libro" });
	}
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
