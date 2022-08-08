const express = require("express");
const jokesController = require("../controllers/jokes");

const router = express.Router();

router.get("/", jokesController.get);
router.post("/", jokesController.create);

module.exports = router;
