const express = require("express");
const keys = require("./config/keys");
const mongoose = require("mongoose");
require("./models/Quote");

const app = express();

mongoose.connect(keys.mongoURI);

//app.use are middleware that preprocesses requests before they get to handlers

require("./routes/quoteRoutes")(app); //to pass 'app' object to routes to assign route binds

const PORT = process.env.PORT || 2000; //get port for Heroku's config or use default
app.listen(PORT);

console.log("Server has started successfully on port " + PORT);
