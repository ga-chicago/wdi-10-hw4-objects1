console.log("works");
//******************ANSWER THE FOLLOWING******************
//1 a light switch with on/off
//  I would store it in an object function by using lightSwitch as a key
// and then function(){// turn on //turn off}

//2 a user's email address
//  I would store in an object called user with a key of email

//3 A spaceship with 4 things
// I would create an object called spaceShip and make a key for each item
// and if the lasers, beam, and warp drive are supposed to do something i
// would make functions for each of those keys

//4 a list of our classes students
// I would store in an array variable called students

//5 "" with location
// I would store in an object called students and for each student I would
// create objects for each student with a key of name and key of location


//6 "" with more.
// I would add a key favoriteTVshows to my previous student object to each
// of the students individual objects within the larger student object

//******************TAKE IT EASY****************************
// let rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// console.log(rainbowColors[4]);
//
// let sierra = {
//     favFood: "enchiladas",
//     hobby: "guitar",
//     lives: "chicago",
//     favDataType: "objects"
// };
// console.log(sierra.hobby);

//****************CRAZY OBJECT********************************
const crazyObject = {
    taco: [{meat: 'steak',cheese: ['panela', 'queso', 'chihuahua']},
        {meat: 'chicken', salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
    ],
    larry: {
        nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
        quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
        characters: [{
            name: "Jeff",
            occupation: "manager"
        },
            {
                name: "funkhauser",
                occupation: "tv dude"
            },
            {
                name: "susie",
                occupation: "jeffs wife",
                favourtieHobby: "Swearing at Larry and Jeff"
            },
        ]
    }
};

//1
console.log(crazyObject.taco[1].salsa[5]);
//2
console.log(crazyObject.larry.quotes[0]);
//3
console.log(crazyObject.larry.characters[2].favourtieHobby);
//4
console.log(crazyObject.larry.nicknames[1]);
//5
console.log(crazyObject.larry.characters[1]);























