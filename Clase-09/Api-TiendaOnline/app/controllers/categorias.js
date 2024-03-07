const Categoria = require("../models/categoria");

module.exports.getAllCategorias = async (req, res) => {
	try {
		const categorias = await Categoria.find();
		res.json(categorias);
	} catch (error) {
		res.status(500).json({ error: "Error al obtener las categorias" });
	}
};

module.exports.getOneCategoria = async (req, res) => {
	try {
		const categoria = await Categoria.findById(req.params.id);
		if (!categoria) {
			return res.status(404).json({ error: "Categoria no encontrada" });
		}
		res.json(categoria);
	} catch (error) {
		res.status(500).json({ error: "Error al obtener la categoria" });
	}
};

module.exports.createCategoria = async (req, res) => {
	try {
		const nuevaCategoria = new Categoria(req.body);
		await nuevaCategoria.save();
		res.status(201).json(nuevaCategoria);
	} catch (error) {
		res.status(400).json({ error: "Error al crear categoria" });
	}
};

module.exports.deleteCategoria = async (req, res) => {
	try {
		const categoria = await Categoria.findByIdAndDelete(req.params.id);
		if (!categoria) {
			return res.status(404).json({ error: "Categoria no encontrada" });
		}
		res.json({ message: "Categoria eliminada correctamente", categoria });
	} catch (error) {
		res.status(500).json({ error: "Error al eliminar categoria" });
	}
};
