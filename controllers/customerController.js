const Customer = require("../models/Customer");
const { validationResult } = require("express-validator/check");

module.exports = {
    async createCustomer(req, res) {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const {
            firstName,
            lastName,
            equipment,
            email,
            streetAddress,
            state,
            zipCode,
            homePhone,
            mobilePhone,
            workPhone,
            canText,
            canEmail,
            inCityLimits,
            notes
        } = req.body;

        try {
            let customer = await Customer.findOne({ email });

            if(customer) {
                return res.status(400).json({ errors: [{ msg: "That customer already exists in the system" }] });
            }

            customer = new Customer({
                firstName,
                lastName,
                equipment,
                email,
                streetAddress,
                state,
                zipCode,
                homePhone,
                mobilePhone,
                workPhone,
                canText,
                canEmail,
                inCityLimits,
                notes
            });

            await customer.save();

            res.json({ msg: "Customer created successfully" });
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ msg: "Internal server error in POST /api/customers" });
        }

    },
    async getAllCustomers(req, res) {
        try {
            /* 
                Retrieve customers sorted alphabetically by last name
            */
            const customers = await Customer.find().sort({ "lastName": 1 });

            if(!customers) {
                return res.status(400).json({ msg: "Could not find customers" });
            }

            res.json(customers);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server error in getAllCustomers()");
        }
    },
    async getCustomerById(req, res) {
        try {
            const id = req.params.id;

            const customer = await Customer.findById(id);

            if(!customer) {
                return res.status(500).json({ msg: "No customer found with that ID" });
            }

            res.json(customer);
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ msg: "Server error in getCustomerById" });
        }
    }
};