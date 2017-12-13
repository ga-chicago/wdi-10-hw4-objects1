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








