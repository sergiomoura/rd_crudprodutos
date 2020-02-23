const express = require("express");
const GruposController = require("../controllers/GruposController");
const router = express.Router();
router.get("/", GruposController.index);

module.exports = router;
