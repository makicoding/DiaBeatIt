const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

app.use(passport.initialize()); 
app.use(passport.session()); // persistent login sessions
require("./config/passport");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://ignaciuk:qyKDcJmGnUz4NRJ@ds245387.mlab.com:45387/heroku_w86h6vgp");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
