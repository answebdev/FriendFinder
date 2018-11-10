var path = require('path');

// Import the list of friends
var friendsArray = require("../data/friends.js");

// Export API routes
module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
  });

  // Add a new friend
  app.post("/api/friends", function (req, res) {

    // Capture the user input object
    var userInput = req.body;
    var userScores = userInput.scores;

    // Create an object to hold the best match
    var bestMatch = {
      name: "",
      photo: "",
      totalDifference: 5000  // Make value big for comparison
    };

    // Use to calculate the difference between the user's scores and the scores of each user in the database
    var difference = 0;

    // Loop through all existing friends
    for (var i = 0; i < friendsArray.length; i++) {
      // console.log("Friend: " + JSON.stringify(friendsArray[i]));
      difference = 0;

      // Loop through scores of each friend and calculate the absolute differences
      for (var j = 0; j < userScores.length; j++) {
        difference += Math.abs(parseInt(userScores[j]) - parseInt(friendsArray[i].scores[j]));
      }

      // If the sum of differences is less then the differences of the current "best match"
      if (difference <= bestMatch.totalDifference) {

        // Reset the bestMatch to be the new friend. 
        bestMatch.name = friendsArray[i].name;
        bestMatch.photo = friendsArray[i].photo;
        bestMatch.totalDifference = difference;

        // TESTING
        // console.log("\nBEST MATCH: " + bestMatch.name);
        // console.log("PHOTO: " + bestMatch.photo);
        // console.log("DIFFERENCE: " + bestMatch.totalDifference + "\n");
      }
    }
    // console.log("\nuserInput = " + JSON.stringify(userInput));

    // Add a new user
    friendsArray.push(userInput);

    // Return bestMatch object in JSON format back to the front-end
    res.json(bestMatch);
  });
};
