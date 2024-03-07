const express = require("express");
const router = express.Router();
const pedidosController = require("../controllers/pedidos");

router.get("/", pedidosController.getAllPedidos);
router.get("/:id", pedidosController.getOnePedido);
router.post("/", pedidosController.createPedido);
router.delete("/:id", pedidosController.deletePedido);

module.exports = router;
