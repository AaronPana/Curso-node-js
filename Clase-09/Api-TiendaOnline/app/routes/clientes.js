const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientes");

router.get("/", clientesController.getAllClientes);
router.get("/:id", clientesController.getOneCliente);
router.post("/", clientesController.createCliente);
router.delete("/:id", clientesController.deleteCliente);

module.exports = router;
