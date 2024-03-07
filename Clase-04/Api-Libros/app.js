const express = require("express");
const app = express();
const librosRoute = require("./routes/libros");
const handlerError = require("./middleware/handlerError");
const port = 3000;

app.use(express.json());
app.use("/libros", librosRoute);
app.use(handlerError);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
	console.log(`http://localhost:${port}`);
});
