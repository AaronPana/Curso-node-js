const express = require("express");
const app = express();
const routerProductos = require("./app/routes/productos");
const errorHandler = require("./app/middlewares/errorHandler");
const dbConnect = require("./config/database");

require("dotenv").config();

const { auth } = require("express-oauth2-jwt-bearer");

const autenticacion = auth({
	audience: process.env.OAUTH_AUDIENCE,
	issuerBaseURL: process.env.OAUTH_URL,
	tokenSigningAlg: "RS256",
});

app.use(express.json());

app.get("/", (req, res) => {
	res.send("API de Productos");
});

app.use("/api/productos", autenticacion, routerProductos);

app.use(errorHandler);

const port = process.env.PORT || 3000;

dbConnect();

app.listen(port, () => {
	console.log(`API de productos escuchando en el puerto ${port}`);
});
