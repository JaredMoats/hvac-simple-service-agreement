/* The main file for the node server */

//#1 bring in express, init express app, assign port
const express = require("express");

const app = express();
const connectDB = require("./config/db");
const path = require("path");
const PORT = process.env.PORT || 5000;

//Connect to database
connectDB();

//Init middleware to send json
app.use(express.json({ extended: false }));

/* Define routes to use */
app.use("/api/equipment", require("./routes/api/equipment"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/customer", require("./routes/api/customer"));
app.use("/api/technician", require("./routes/api/technician"));

//Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

//Activate server
app.listen(PORT, () => console.log(`Server is listening on port ${ PORT }`));