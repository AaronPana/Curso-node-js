const express = require("express");
const dbConnect = require("./config/database")

const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./app/middlewares/errorHandler");

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
const librosRouter = require("./app/routes/libros");
// Importamos el Router de Usuarios
const usuariosRouter = require("./app/routes/usuarios");

//Configuramos el middleware de autenticacion
app.use("/api/libros", autenticacion, librosRouter);
app.use("/api/usuarios", autenticacion, usuariosRouter);

app.use(errorHandler);

PORT = process.env.PORT || 3000;

dbConnect();
app.listen(PORT, () => {
	console.log(`Servidor iniciado en el puerto ${PORT}`);
});

module.exports = app;
