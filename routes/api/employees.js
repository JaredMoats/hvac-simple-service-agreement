const express = require("express");
const router = express.Router();
const { check } = require("express-validator/check");
const employeeController = require("../../controllers/employeeController");

router.get("/", (req, res) => res.send("Employee information"));

/*
    @route  POST api/employees
    @desc   Register/Create new employee
    @access Public
*/
router.post(
    "/", 
    [
        check("firstName", "First name is required")
            .not()
            .isEmpty(),
        check("lastName", "Last name is required")
            .not()
            .isEmpty(),
        check("email", "Please include a valid email").isEmail(),
        check(
            "password",
            "Please enter a password with six or more characters"
        ).isLength({ min: 6 }),
        check("companyName", "Company name is required")
            .not()
            .isEmpty(),
        check("role", "Role is required")
            .not()
            .isEmpty()
    ],
    employeeController.registerEmployee
);

module.exports = router;