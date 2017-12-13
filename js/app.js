//DATATYPES

//Answer the following

//1. I would use a Boolean data type tucked within an object to represent the data. It would look something like:

// const lightSwitch = {
// 	flippedUp: true
// }

//2. I would use a string data type stored as a property of an object

// const userInfo = {
// 	email: 'user@userwebsite.com'
// }

//3. I would use an object with keys that list the attributes of the spaceship and either strings or arrays of strings that describe those attributes

// const spaceShip = {
// 	hull: "Titanium Plated Hull",
// 	weapons: ["Laser Blasters", "Tractor Beam"],
// 	propulsion: "Warp Drive"
// }

//4. I would use an array containing strings 

// const students = ["Michael", "Somers", "Anthony", "Kait"];

//5. I would use an array of objects containing key value pairs representing their attributes listed in strings

// const classList = [ { 
// 	name: "Michael",
// 	location: "classroom one"
// 	}, {
// 	name: "Somers",
// 	location: "kitchen"
// 	}, {
// 	name: "Anthony",
// 	location: "classroom one"
// 	}, {
// 	name: "Kait",
// 	location: "classroom one"
// 	}
// ]

//6. I would use an array of objects containting key value pairs representing their attributes listed in strings or strings within an array

// const classListTwo = [ { 
// 	name: "Michael",
// 	location: "classroom one",
// 	favoriteShows: ["Breaking Bad", "Parks and Rec"]
// 	}, {
// 	name: "Somers",
// 	location: "kitchen",
// 	favoriteShows: ["The Wire", "America's Next Top Chef"]
// 	}, {
// 	name: "Anthony",
// 	location: "classroom one",
// 	favoriteShows: ["Game of Thrones", "Star Trek"]
// 	}, {
// 	name: "Kait",
// 	location: "classroom one",
// 	favoriteShows: ["Road Truckers", "NFL Pregame Sunday"]
// 	}
// ]


//Take it easy

// //1. 

// const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// //2.

// rainbow[1];

// //3. 

// const Michael = {
// 	favFood: "Pasta",
// 	hobby: "Cooking",
// 	currentTown: "Chicago",
// 	favDataType: "Booleans"
// }

// //4.

// Michael.hobby;


//Crazy Object!

// const crazyObject = {
//   taco: [{meat: 'steak',
//          cheese: ['panela', 'queso', 'chihuahua']},
//          {meat: 'chicken',
//           salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
//         ],
//   larry: {
//     nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//     quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//     characters: [{
//       name: "Jeff",
//       occupation: "manager"
//     },
//     {
//       name: "funkhauser",
//       occupation: "tv dude"
//     },
//     {
//       name: "susie",
//       occupation: "jeffs wife",
//       favourtieHobby: "Swearing at Larry and Jeff"
//     },
//     ]
//   }
// }

// //1. 

// console.log(crazyObject.taco[1].salsa[5]);

// //2. 

// console.log(crazyObject.larry.quotes[0]);

// //3. 

// console.log(crazyObject.larry.characters[2].favourtieHobby);

// //4.

// console.log(crazyObject.larry.nicknames[1]);

// //5.

// console.log(crazyObject.larry.characters[1]);


//Object-ception

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

console.log(inception);

















