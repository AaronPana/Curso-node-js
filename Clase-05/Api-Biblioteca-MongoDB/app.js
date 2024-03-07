const express = require("express");
const app = express();

const librosRoutes = require('./app/routes/libros')
const errorHandler = require("./app/middlewares/errorHandler");
const dbConnect = require("./config/database");

const port = 3000;

app.use(express.json());
app.use('/libros', librosRoutes)
app.use(errorHandler);

dbConnect();
app.listen(port, (req, res) => {
	console.log(`Server running on port ${port}`);
});
