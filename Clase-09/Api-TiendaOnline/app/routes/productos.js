const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productos");

router.get("/", productosController.getAllProductos);
router.get("/:id", productosController.getOneProducto);
router.post("/", productosController.createProducto);
router.delete("/:id", productosController.deleteProducto);

module.exports = router;
