const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Employee = require("../models/Employee");
const keys = require("../config/keys");

module.exports = {
    async login(req, res) {
        /* #1 Check for errors */
        const errors = validationResult(req);

        if(!errors.isEmpty) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            /* #2 Find employee that matches email. */
            const { email, password } = req.body;

            let employee = await Employee.findOne({ email });

            if(!employee) {
                return res.status(400).json({ msg: "There is no account matching that email" });
            }

            /* #3 Compare passwords */  
            const isMatch = await bcrypt.compare(password, employee.password);

            if(!isMatch) {
                return res.status(400).json({ msg: "Passwords do not match" });
            }

            /* #4 If passwords match, sign and send back token */
            const payload = {
                employee: {
                    id: employee.id
                }
            }

            jwt.sign(
                payload,
                keys.jwtSecret,
                { expiresIn: 360000 },
                (err, token) => {
                    if(err) throw err;
                    res.json({ token });
                }
            );

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server error in login()");
        }
    }
}