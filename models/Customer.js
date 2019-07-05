const mongoose = require("mongoose");
const { Schema } = mongoose;

const CustomerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    homePhone: {
        type: Number,
        default: ""
    },
    mobilePhone: {
        type: Number,
        default: ""
    },
    workPhone: {
        type: Number,
        default: ""
    },
    canText: {
        type: Boolean,
        default: false
    },
    canEmail: {
        type: Boolean,
        default: false
    },
    inCityLimits: {
        type: Boolean,
        required: true
    },
    hasServiceAgreement: {
        type: Boolean,
        default: false
    },
    notes: {
        type: String,
        default: ""
    }
});

module.exports = Customer = mongoose.model("customer", CustomerSchema);