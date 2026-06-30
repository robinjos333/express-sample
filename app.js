const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1/express-sample");

app.use(bodyParser.json());
routes(app);

module.exports = app;
