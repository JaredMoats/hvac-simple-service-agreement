const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Customer information"));

module.exports = router;