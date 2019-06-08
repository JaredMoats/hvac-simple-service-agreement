/* The main file for the node server */

//#1 bring in express, init express app, assign port
const express = require("express");

const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

//Connect to database
connectDB();

//Init middleware to send json
app.use(express.json({ extended: false }));

//default route
app.get("/", (req, res) => res.send("HVAC Service Agreement API Running"));

/* Define routes to use */
app.use("/api/equipment", require("./routes/api/equipment"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/customer", require("./routes/api/customer"));
app.use("/api/technician", require("./routes/api/technician"));

//Activate server
app.listen(PORT, () => console.log(`Server is listening on port ${ PORT }`));