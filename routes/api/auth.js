const express = require("express");
const router = express.Router();
const { check } = require("express-validator/check");
const authController = require("../../controllers/authController");

router.get("/", (req, res) => res.send("Authorization endpoint"));

/*
    @route  POST api/auth
    @desc   Login user
    @access Public
*/
router.post(
    "/", 
    [
        check("email", "Please enter a valid email")
            .isEmail(),
        check("password", "Please enter a password")
            .not()
            .isEmpty()
    ],
    authController.login
);

module.exports = router;