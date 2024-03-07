const express = require("express");
const app = express();

const productosRoutes = require("./app/routes/productos");
const categoriasRoutes = require("./app/routes/categorias");
const clientesRoutes = require("./app/routes/clientes");
const pedidosRoutes = require("./app/routes/pedidos");
const errorHandler = require("./app/middlewares/errorHandler");

const PORT = 3000;

app.use(express.json());

app.use("/productos", productosRoutes);
app.use("/categorias", categoriasRoutes);
app.use("/clientes", clientesRoutes);
app.use("/pedidos", pedidosRoutes);

app.use(errorHandler);

require("./config/mongoose");
app.listen(PORT, () => {
	console.log(`Servidor escuchando en el puerto ${PORT}`);
});
