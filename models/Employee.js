const mongoose = require("mongoose");
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
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
    password: {
        type: String,
        required: true
    }, 
    companyName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
}); 

module.exports = Employee = mongoose.model("employee", EmployeeSchema);