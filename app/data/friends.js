// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

console.log("WELCOME TO THE FRIENDS DATA FILE");

var friendsArray = [
    {
      customerName: "Ahmed",
      customerEmail: "ahmed@example.com",
      customerID: "afhaque89",
      phoneNumber: "000-000-0000"
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  