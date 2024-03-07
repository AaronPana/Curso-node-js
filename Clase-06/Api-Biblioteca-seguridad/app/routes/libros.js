const express = require("express");
const router = express.Router();

const { requiredScopes } = require("express-oauth2-jwt-bearer");

const {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
} = require("../controllers/libros");

router.get("/", requiredScopes("read:libros"), getItems);

router.get("/:id", requiredScopes("read:libros"), getItem);

router.post("/", requiredScopes("write:libros"), createItem);

router.put("/:id", requiredScopes("write:libros"), updateItem);

router.delete("/:id", requiredScopes("write:libros"), deleteItem);

module.exports = router;
