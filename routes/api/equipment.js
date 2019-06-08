const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Equipment information"));

module.exports = router;