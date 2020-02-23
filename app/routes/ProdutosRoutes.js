const express = require("express");
const ProdutosController = require("../controllers/ProdutosController");
const router = express.Router();
router.get("/", ProdutosController.index);
router.post("/", ProdutosController.store);
router.put("/:codigo", ProdutosController.update);
router.delete("/:codigo", ProdutosController.destroy);

module.exports = router;
