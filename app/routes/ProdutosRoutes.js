const express = require("express");
const ProdutosController = require("../controllers/ProdutosController");
const router = express.Router();
router.get("/", ProdutosController.index);

module.exports = router;
