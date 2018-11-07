var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Tell node that we are creating an "express" server
var app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

// Set initial port, which we will use later in our listener
var PORT = process.env.PORT || 8080;

// Access CSS and images directory
app.use(express.static(path.join(__dirname, './app/public')));
app.use(express.static(path.join(__dirname, './app/public/images')));

// Create application/JSON parser
// var jsonParser = bodyParser.json()

// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

// POST /login gets urlencoded bodies
// app.post('/login', urlencodedParser, function (req, res) {
//     if (!req.body) return res.sendStatus(400)
//     res.send('welcome, ' + req.body.username)
// })

// POST /api/users gets JSON bodies
// app.post('/api/users', jsonParser, function (req, res) {
//     if (!req.body) return res.sendStatus(400)
//     // create user in req.body
// })

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))





// =====================================================================

// Set up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // ================================================================================
// // ROUTER
// // The below points our server to a series of "route" files.
// // These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// // ================================================================================

// Include route files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// require(path.join(__dirname, './app/routing/apiRoutes'))(app);
// require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Code to start the server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
