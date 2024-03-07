const Libro = require("../models/libroModel");

exports.getAllLibros = async (req, res) => {
	try {
		const libros = await Libro.find();
		res.status(200).json(libros);
	} catch (error) {
		res.status(500).json({ error: "Error al obtener los libros" });
	}
};

exports.getLibroById = async (req, res) => {
	try {
		const libro = await Libro.findById(req.params.id);
		if (!libro) {
			return res.status(404).json({ error: "Libro no encontrado" });
		}
		res.status(200).json(libro);
	} catch (error) {
		res.status(500).json({ error: "Error al obtener el Libro" });
	}
};

exports.createLibro = async (req, res) => {
	try {
		const nuevoLibro = await Libro.create(req.body);
		await nuevoLibro.save();
		res.status(201).json(nuevoLibro);
	} catch (error) {
		res.status(500).json({ error: "Error al crear el Libro" });
	}
};

exports.updateLibro = async (req, res) => {
	try {
		const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});

		if (!libro) {
			return res.status(404).json({ error: "Libro no encontrado" });
		}

		res.status(200).json(libro);
	} catch (error) {
		res.status(500).json({ error: "Error al actualizar el Libro" });
	}
};

exports.deleteLibro = async (req, res) => {
	try {
		const libroId = req.params.id;

		const libroEliminado = await Libro.findByIdAndDelete(libroId);

		if (!libroEliminado) {
			return res.status(404).json({ error: "Libro no encontrado" });
		}

		res.status(200).json(libroEliminado);
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: "Error al eliminar el Libro" });
	}
};
