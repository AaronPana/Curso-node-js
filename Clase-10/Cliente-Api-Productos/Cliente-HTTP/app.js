const axios = require("axios");
const { getB2BToken } = require("./getToken");

require("dotenv").config();

const URL = process.env.URL_API;

const obtenerProductos = async () => {
	try {
		const accessToken = await getB2BToken();
		const headers = {
			Authorization: `Bearer ${accessToken}`,
			"Content-Type": "application/json",
		};

		const respuesta = await axios.get(URL, { headers });
		if (respuesta.status === 200) {
			console.log("Productos obtenidos correctamente");
			console.log("Productos: ", respuesta.data);
		} else {
			console.log("Error al obtener los productos: ", respuesta.status);
		}
	} catch (error) {
		console.error("Error al obtener los productos: ", error.response.data);
	}
};

const agregarProducto = async () => {
	const nuevoProducto = {
		nombre: "producto 9",
		descripcion: "Descripcion 9",
		precio: 999,
		stock: 99,
		categoria: "Random",
	};

	try {
		const accessToken = await getB2BToken();
		const headers = {
			Authorization: `Bearer ${accessToken}`,
			"Content-Type": "application/json",
		};

		const respuesta = await axios.post(URL, nuevoProducto, { headers });
		if (respuesta.status === 201) {
			console.log("Producto creado correctamente");
			console.log("Producto: ", respuesta.data);
		} else {
			console.log("Error al crear el producto: ", respuesta.status);
		}
	} catch (error) {
		console.error("Error al crear el producto: ", error.response.data);
	}
};

const eliminarProducto = async () => {
	const idProducto = "65efb3e3110f10a9532549f4";

	try {
		const accessToken = await getB2BToken();
		const headers = {
			Authorization: `Bearer ${accessToken}`,
			"Content-Type": "application/json",
		};

		const respuesta = await axios.delete(`${URL}/${idProducto}`, { headers });
		if (respuesta.status === 200) {
			console.log("Producto eliminado correctamente");
			console.log("Producto: ", respuesta.data.producto);
		} else {
			console.log("Error al eliminar el producto: ", respuesta.status);
		}
	} catch (error) {
		console.error("Error al eliminar el producto: ", error.response.data);
	}
};

agregarProducto();

obtenerProductos();

eliminarProducto();
