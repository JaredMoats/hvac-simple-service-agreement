const express = require("express");
const router = express.Router();
const customerController = require("../../controllers/customerController.js");
const auth = require("../../middleware/auth");
const { check } = require("express-validator/check");

/*
    @route  api/customers
    @desc   Get all customers
    #access Private
*/
router.get(
    "/", 
    auth, 
    customerController.getAllCustomers
);


/* 
    @route  api/customers/:id
    @desc   Get customer by ID
    @access Private
*/

router.get(
    "/:id", 
    auth, 
    customerController.getCustomerById
);

/* 
    @route  api/customers
    @desc   Create a new customer
    @access Private
*/
router.post("/", 
    [
        auth,
        [
            check("firstName", "First name is required")
                .not()
                .isEmpty(),
            check("lastName", "Last name is required")
                .not()
                .isEmpty(),
            check("streetAddress", "Street address is required")
                .not()
                .isEmpty(),
            check("state", "State is required")
                .not()
                .isEmpty(),
            check("zipCode", "Zip code is required")
                .not()
                .isEmpty(),
            check("inCityLimits", "In City Limits is required")
                .not()
                .isEmpty()
        ]
    ], 
    customerController.createCustomer
);

module.exports = router;