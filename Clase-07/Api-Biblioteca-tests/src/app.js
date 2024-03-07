const express = require("express");

const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middlewares/errorHandler");

// Cargamos las variables de entorno propias del proyecto en '.env'
require("dotenv").config();

// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
	audience: process.env.OAUTH_AUDIENCE,
	issuerBaseURL: process.env.OAUTH_URL,
	tokenSigningAlg: "RS256",
});

const app = express();
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");

//Configuramos el middleware de autenticacion
app.use("/api/libros", autenticacion, librosRouter);

app.use(errorHandler);

PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Servidor iniciado en el puerto ${PORT}`);
});

module.exports = app;
