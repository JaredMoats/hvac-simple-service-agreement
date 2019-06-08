/* This file exports a function that allows us to 
connect to the MongoDB database */

const mongoose = require("mongoose");
const keys = require("./keys");

const db = keys.mongoURI;

//connect to mongodb

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error(error.message);
        //Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;