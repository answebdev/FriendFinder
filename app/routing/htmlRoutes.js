// Include the path package to get the correct file path for our html
var path = require("path");

module.exports = function (app) {

  // console.log("Welcome to the htmlRoutes.js file");

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // app.get("/", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });

  // If no matching route is found default to Home
  app.use("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
