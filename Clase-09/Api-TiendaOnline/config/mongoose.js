const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tienda-en-linea");
const db = mongoose.connection;
db.on("error", () => {
	console.log("Error de conexión a la base de datos");
});
db.once("open", () => {
	console.log("Conexión exitosa a la base de datos MongoDB");
});
