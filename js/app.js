// Answer the Following
console.log("Answer the Following")
console.log("\n");

console.log("A light switch that can be either on or off.")
console.log("Answer: boolean. let example = true;");
console.log("\n");
// A user's email address.
console.log("A user's email address.")
console.log("Answer: string. let example = 'sergio@sergio.com'");
console.log("\n");
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
console.log("A spaceship with a hull, laser blasters, tractor beam, and warp drive.")
console.log("Answer: object. let example = {hull: true, laserBlasters: true, tractorBeam: true, warpDrive: true}");
console.log("\n");
// A list of student names from our class.
console.log("A list of student names from our class.")
console.log("Answer: array. ['sergio','sergio','sergio','sergio']");
console.log("\n");

// A list of student names from our class, each with a location.
console.log("A list of student names from our class, each with a location.")
console.log("Answer: object. let example = {sergio: {location: Chicago}, sergio2: {location: Chicago}, sergio3: {location: Chicago}}");
console.log("\n");

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
console.log("A list of student names from our class, each with a location and each with a list of favorite tv shows.")
console.log("Answer: object. let example = {sergio: {location: Chicago, favMovies: ['gsd','gsd','dgsdsf']}, sergio2: {location: Chicago, favMovies: ['gsd','gsd','dgsdsf']}, sergio3: {location: Chicago, favMovies: ['gsd','gsd','dgsdsf']}}");
console.log("\n");
console.log("\n");


// Take it Easy

// Make an array that holds all of the colors of the rainbow.
let rainbowColors = ["yellow","blue","red","purple","green"];

// Write code that will access "blue" from the rainbow array.
rainbowColors[1];

// Make an object that is called your name and holds the information about your favorite food, 
// a hobby, the name of the town that you live in currently, and your favorite datatype.
let sergio = {
	favFood: "pizza",
	hobby: "gaming",
	town: "chicago",
	favDataType: "boolean"
}

// Write code that will access your hobby from the object that you just created.
sergio.hobby;



// Crazy Object!

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
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
}
// Use crazy Object to log the following.

// "omg my mouth is burning"
crazyObject.taco[1].salsa[5];

// "Pretty pretty prettayyyyy good"
crazyObject.larry.quotes[0];

// "Swearing at Larry and Jeff"
crazyObject.larry.characters[2].favourtieHobby;

// "Chicken Teriyaki Boyyyyyy"
crazyObject.larry.nicknames[1];

// The object the contains the name funkhauser
crazyObject.larry.characters[1];


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

// BondTitles
let bondFilmsArray = [];

for (var i = 0; i < bondFilms.length; i++) {
	bondFilmsArray.push(bondFilms[i]['title']);
};

console.log(bondFilmsArray);

// Odd bonds
let oddTitles = [];

for (var i = 0; i < bondFilms.length; i++) {
	if (bondFilms[i]['year'] % 2){ // Checks for odd year of film, expression if even evaluates to 0 which does not execute the conditional code
		oddTitles.push(bondFilms[i]['title']);
	}
};

console.log(oddTitles);

// Total Cumulative gross
let totalGross = 0;

for (var i = 0; i < bondFilms.length; i++) {
	let stringedGross = parseInt(bondFilms[i]["gross"].replace(/[$,]/g,"")); //Gross amounts in parsed into numbers and special characters removed
	totalGross += stringedGross;
};

console.log(totalGross);

// DIGGING DEEPER
let actorFrequency = {};

for (var i = 0; i < bondFilms.length; i++) {
	actorFrequency[bondFilms[i]["actor"]] = 0; // Fills actorFrequency Object with actors
}

for (var i = 0; i < bondFilms.length; i++) { 
	for(key in actorFrequency){ 
		if (key == bondFilms[i]["actor"]){ // Increments the frequency of each actor by 1 after every occurence 
			actorFrequency[bondFilms[i]["actor"]] += 1;
		} 
	}
}

let sorted = Object.keys(actorFrequency).sort( // Used sort to list my actors from least frequent to most frequent
		function(a,b){
			return actorFrequency[a] - actorFrequency[b]
		}
	);

for (var i = 0; i < bondFilms.length; i++) {
	if(bondFilms[i]["actor"] == sorted[0]){ // Returns object containing least frequent actor
		console.log(bondFilms[i]);
	}
};