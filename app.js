// Require packages
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const { PORT, BASE_URL } = process.env;
console.log(process.env);
// installing packages
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Route
app.use("/api", require("./routes/home.route"));

// Start server
app.listen(process.env.PORT, () => {
    console.log(`the server is running on Port ${BASE_URL}:${PORT}`);
});