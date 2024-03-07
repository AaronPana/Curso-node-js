const express = require("express");
const route = express.Router();
const Joi = require("joi");
const libros = require("../data");

const generadorId = () => {
	return libros[libros.length - 1].id + 1;
};

const libroSchema = Joi.object({
	titulo: Joi.string().required().label("Título"),
	autor: Joi.string().required().label("Autor"),
});

route.get("/", (req, res, next) => {
	try {
		res.json(libros);
	} catch (err) {
		next(err);
	}
});

route.get("/:id", (req, res, next) => {
	try {
		const id = parseInt(req.params.id);
		const libro = libros.find((lib) => lib.id === id);

		if (!libro) {
			const error = new Error("Libro no encontrado");
			error.status = 404;
			throw error;
		}

		res.json(libro);
	} catch (err) {
		next(err);
	}
});

route.post("/", (req, res, next) => {
	try {
		const { error, value } = libroSchema.validate(req.body);

		if (error) {
			const validationError = new Error("Error de validación");
			validationError.status = 400;
			validationError.details = error.details.map((detail) => detail.message);
			throw validationError;
		}

		const { titulo, autor } = value;

		const nuevoLibro = {
			id: generadorId(),
			titulo,
			autor,
		};

		libros.push(nuevoLibro);
		res.status(201).json(nuevoLibro);
	} catch (err) {
		next(err);
	}
});

route.put("/:id", (req, res, next) => {
	try {
		const id = parseInt(req.params.id);
		const { error, value } = libroSchema.validate(req.body);

		if (error) {
			const validationError = new Error("Error de validación");
			validationError.status = 400;
			validationError.details = error.details.map((detail) => detail.message);
			throw validationError;
		}

		const { titulo, autor } = value;
		const libro = libros.find((lib) => lib.id === id);

		if (!libro) {
			const error = new Error("Libro no encontrado");
			error.status = 404;
			throw error;
		}

		libro.titulo = titulo || libro.titulo;
		libro.autor = autor || libro.autor;

		res.json(libro);
	} catch (err) {
		next(err);
	}
});

route.delete("/:id", (req, res, next) => {
	try {
		const id = parseInt(req.params.id);
		const index = libros.findIndex((lib) => lib.id === id);

		if (index === -1) {
			const error = new Error("Libro no encontrado");
			error.status = 404;
			throw error;
		}

		const libroEliminado = libros.splice(index, 1);
		res.json(libroEliminado[0]);
	} catch (err) {
		next(err);
	}
});

module.exports = route;
