const Producto = require("../models/productos");
const Categoria = require("../models/categorias");

module.exports.getAllProductos = async (req, res) => {
	try {
		const productos = await Producto.find();
		res.json(productos);
	} catch (error) {
		res.status(500).json({ error: "Error al obtener los productos" });
	}
};

module.exports.getOneProducto = async (req, res) => {
	try {
		const producto = await Producto.findById(req.params.id);
		if (!producto) {
			return res.status(404).json({ error: "Producto no encontrado" });
		}
		res.json(producto);
	} catch (error) {
		res.status(500).json({ error: "Error al obtener el producto" });
	}
};

module.exports.createProducto = async (req, res) => {
	try {
		const { categoria } = req.body;
		const categoriaExiste = await Categoria.find({ nombre: categoria });
		if (categoriaExiste.length < 1) {
			return res.status(404).json({ error: "Categoria no encontrada" });
		}

		const nuevoProducto = new Producto(req.body);
		await nuevoProducto.save();
		res.status(201).json(nuevoProducto);
	} catch (error) {
		res.status(400).json({ error: "Error al crear producto" });
	}
};

module.exports.deleteProducto = async (req, res) => {
	try {
		const producto = await Producto.findByIdAndDelete(req.params.id);
		if (!producto) {
			return res.status(404).json({ error: "Producto no encontrado" });
		}
		res.json({ message: "Producto eliminado correctamente", producto });
	} catch (error) {
		res.status(500).json({ error: "Error al eliminar producto" });
	}
};
