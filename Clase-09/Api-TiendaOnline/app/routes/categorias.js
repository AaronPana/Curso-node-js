const express = require("express");
const router = express.Router();
const categoriasController = require("../controllers/categorias");

router.get("/", categoriasController.getAllCategorias);
router.get("/:id", categoriasController.getOneCategoria);
router.post("/", categoriasController.createCategoria);
router.delete("/:id", categoriasController.deleteCategoria);

module.exports = router;
