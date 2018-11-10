// NPM packages that to give our server useful functionality
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Tell node that we are creating an "express" server
var app = express();

// Set initial port, which we will use later in our listener
var PORT = process.env.PORT || 8080;

// Create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

// Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// Parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// Parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

// Access CSS and images directory
app.use(express.static(path.join(__dirname, './app/public')));
app.use(express.static(path.join(__dirname, './app/public/images')));

// Include route files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Code to start the server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
