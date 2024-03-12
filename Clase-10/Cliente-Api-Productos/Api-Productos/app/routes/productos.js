const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productos");

const { requiredScopes } = require("express-oauth2-jwt-bearer");

router.get("/", requiredScopes("read:productos"), productosController.getAllProductos);
router.get("/:id", requiredScopes("read:productos"), productosController.getOneProducto);
router.post("/", requiredScopes("write:productos"), productosController.createProducto);
router.delete("/:id", requiredScopes("write:productos"), productosController.deleteProducto);

module.exports = router;
