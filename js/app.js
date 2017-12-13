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

// const inception = {
//    reality: {
//        dreamLayer1: {
//            dreamLayer2: {
//                dreamLayer3: {
//                    dreamLayer4: {
//                        dreamLayer5: {
//                            dreamLayer6: {
//                                limbo: "Joseph Gordon Levitt"
//                           }
//                        }
//                    }
//                }
//            }
//        }
//    }
// }

// inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

// console.log(inception);


//Bond Films

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

let bondTitles = [];

for (let i = 0; i < bondFilms.length; i++) {
	bondTitles.push(bondFilms[i].title);
}

console.log(bondTitles);

let oddBonds = [];

for (let i = 0; i < bondFilms.length; i++) {
	if (bondFilms[i].year % 2 === 1) {
		oddBonds.push(bondFilms[i].year);
	}
}

console.log(oddBonds);

let totalGross = 0;

for (let i = 0; i < bondFilms.length; i++) {
	//loops through the bondFilms property "gross" and replaces all non-alphanumeric characters with empty spaces(\W selects all non-alphnumeric and g allows for it to continue after it finds the first instance)
	let cleanGross = bondFilms[i].gross.replace(/\W/g, '');
	//converts the cleanGross string to a number in base 10
	let convertGross = parseInt(cleanGross, 10);
	totalGross += convertGross;
}

console.log(totalGross);


//Digging Deeper

//Log the object containing the actor who has appeared in the least number of films

let actorFrequency = {};

for (let i = 0; i < bondFilms.length; i++) {
	let actor = bondFilms[i].actor;
	if (!actorFrequency[actor]) {
		actorFrequency[actor] = 1;
	}
	else {
		actorFrequency[actor] += 1;
	}
}

let smallest = 10;
let leastAppeared = "";
for (key in actorFrequency) {
	if (actorFrequency[key] < smallest) {
		smallest = actorFrequency[key];
		leastAppeared = key;
	}
}

for (let i = 0; i < bondFilms.length; i++) {
	for (key in bondFilms[i]) {
		if (bondFilms[i][key] === leastAppeared) {
			console.log(bondFilms[i]);
		}
	}
}













