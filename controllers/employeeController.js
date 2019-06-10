const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Employee = require("../models/Employee");
const keys = require("../config/keys");

module.exports = {
    async registerEmployee(req, res) {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        /* #1 Destructure req.body into usable variables */
        const { 
            firstName, 
            lastName,
            email,
            password,
            companyName,
            role
        } = req.body;
        
        try {
            /* #2 Check to see if employee already exists.
            If employee exists, send back error */
            let employee = await Employee.findOne({ email });

            if(employee) {
                return res
                    .statuscode(400)
                    .json({ errors: [{ msg: "User already exists" }] });
            }

        /* #3 Create new employee instance */

        employee = new Employee({
            firstName,
            lastName,
            email,
            password,
            companyName,
            role
        });

        /* #4 Hash password, update user hashword to the hash */

        const salt = await bcrypt.genSalt(10);

        employee.password = await bcrypt.hash(password, salt);

        /* #5 save the employee to database */

        await employee.save();

        /* #6 Sign payload, return jsonwebtoken */
        const payload = {
            user: {
                id: employee.id
            }
        }

        jwt.sign(
            payload,
            keys.jwtSecret,
            { expiresIn: 360000 },
            //Send back json token
            (error, token) => {
                if(error) throw error;
                res.json({ token });
            }
        );

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server error in registerEmployee()");
        }
    }
}