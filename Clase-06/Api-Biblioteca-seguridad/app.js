const express = require("express");
const app = express();

const librosRoutes = require("./app/routes/libros");
const errorHandler = require("./app/middlewares/errorHandler");
const dbConnect = require("./config/database");

const { auth } = require("express-oauth2-jwt-bearer");

const autenticacion = auth({
	audience: "http://localhost:3000/api/biblioteca",
	issuerBaseURL: "https://dev-3p4a17atb848b60y.us.auth0.com/",
	tokenSigningAlg: "RS256",
});

const port = 3000;

app.use(express.json());
app.use("/api/libros", autenticacion, librosRoutes);
app.use(errorHandler);

dbConnect();
app.listen(port, (req, res) => {
	console.log(`Server running on port ${port}`);
});
