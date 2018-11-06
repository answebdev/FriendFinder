// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

console.log("WELCOME TO THE FRIENDS DATA FILE");

// var friendsArray = [
//     {
//         customerName: "Ahmed",
//         customerEmail: "ahmed@example.com",
//         customerID: "afhaque89",
//         phoneNumber: "000-000-0000"
//     }
// ];

var friendsArray = [
    {
        "name": "Ahmed",
        "photo": "https://images.pexels.com/photos/954202/pexels-photo-954202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Karen",
        "photo": "https://images.pexels.com/photos/1539679/pexels-photo-1539679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "scores": [
            1,
            2,
            4,
            4,
            3,
            4,
            1,
            3,
            5,
            2
        ]
    },
    {
        "name": "Samantha",
        "photo": "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "scores": [
            5,
            3,
            3,
            5,
            1,
            2,
            3,
            4,
            1,
            5
        ]
    },
    {
        "name": "Daniel",
        "photo": "https://images.pexels.com/photos/1551446/pexels-photo-1551446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "scores": [
            3,
            5,
            2,
            3,
            5,
            4,
            2,
            3,
            4,
            2
        ]
    }
    

];

// Export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
