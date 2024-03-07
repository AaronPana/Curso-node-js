const express = require("express");
const router = express.Router();

const {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
} = require("../controllers/libros");

router.get("/", getItems);

router.get("/:id", getItem);

router.post("/", createItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

module.exports = router;
