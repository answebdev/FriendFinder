// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var path = require('path');
var friendsArray = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  // console.log("Welcome to the apiRoutes.js file");
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out the survey request... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------
  // Add a new friend
  app.post("/api/friends", function (req, res) {

    // Capture the user input object
    var userInput = req.body;
    var userScores = userInput.scores;

    // var newFriend = {
    // var name = userInput.name;
    // var photoLink = userInput.photoLink;
    // var totalDifference = 5000;
    // };

    var bestMatch = {
      name: "",
      photo: "",
      totalDifference: 5000  // Make value big for comparison
    };

    var difference = 0;

    // Loop through all existing friends
    for (var i = 0; i < friendsArray.length; i++) {
      console.log("Friend: " + JSON.stringify(friendsArray[i]));
      // Calculate the difference for each question
      // var difference = 0;
      difference = 0;

      // Loop through scores of each friend
      for (var j = 0; j < userScores.length; j++) {
        difference += Math.abs(parseInt(userScores[j]) - parseInt(friendsArray[i].scores[j]));
        // difference += Math.abs(friendsArray[i].scores[j] - userScores[j]);
      }
      // console.log("DIFFERENCE: " + difference);

      // If the difference is the lowest, this is the best match
      // if (difference < totalDifference) {
      //   console.log("Closest match found = " + difference);
      //   console.log("Friend name = " + friendsArray[i].name);
      //   console.log("Friend image = " + friendsArray[i].photoLink);

      //   totalDifference = difference;
      //   matchName = friendsArray[i].name;
      //   matchPhoto = friendsArray[i].photoLink;


      // If the sum of differences is less then the differences of the current "best match"
      if (difference <= bestMatch.totalDifference) {

        // Reset the bestMatch to be the new friend. 
        bestMatch.name = friendsArray[i].name;
        bestMatch.photo = friendsArray[i].photo;
        bestMatch.totalDifference = difference;

        console.log("\nBEST MATCH: " + bestMatch.name);
        console.log("PHOTO: " + bestMatch.photo);
        console.log("DIFFERENCE: " + bestMatch.totalDifference + "\n");
      }
    }
    // console.log("REQ.BODY: " + req.body);

    // Capture the user input object
    // var userInput = req.body;
    // var userScores = userInput.scores;
    // console.log(req.body);
    console.log("\nuserInput = " + JSON.stringify(userInput));

    // var closestMatch = {
    //     name: "",
    //     photo: "",
    //     scores: ""
    // };
    friendsArray.push(userInput);

    // Send appropriate response
    // res.json({ status: "OK", matchName: matchName, matchPhoto: matchPhoto });

    // Return bestMatch object in JSON format back to the front-end
    res.json(bestMatch);


    // friendsArray.push(userInput);
  });

};

  //   app.post("/api/friends", function(req, res) {
  //     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
  //     // It will do this by sending out the value "true" have a table
  //     // req.body is available since we're using the body parsing middleware
  //     if (tableData.length < 5) {
  //       tableData.push(req.body);
  //       res.json(true);
  //     }
  //     else {
  //       waitListData.push(req.body);
  //       res.json(false);
  //     }
  //   });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  // app.post("/api/clear", function(req, res) {
  //   // Empty out the arrays of data
  //   tableData.length = [];
  //   waitListData.length = [];

  //   res.json({ ok: true });
  // });
// };
