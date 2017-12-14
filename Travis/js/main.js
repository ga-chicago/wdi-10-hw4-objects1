



// A light switch that can be either on or off. Booleans

let light = false;

// A user's email address. Objects  
 
let email = { 
	name: 'unknown',
	email: 'email@unknown.com'
}

// A spaceship with a hull, laser blasters, tractor beam, and warp drive. String

let spaceship = ('hull', 'laser blasters', 'tractor beam', 'warp drive')


// A list of student names from our class. Strings
let wdi10 = ('kait', 'charls', 'michael')

// A list of student names from our class, each with a location. array of Objects

let wdi10_2 = [
	{name:'kait', location: 'St.Louis'},
	{name:'charls', location: 'south side'},
	{name:'michael', location: 'north side'}
]

// A list of student names from our class, each with a location and each with a list of favorite tv shows. array of Objects
 
 let wdi10_3 = [
	{name:'kait', location: 'St.Louis', tvShows: 'orange is the new black'},
	{name:'charls', location: 'south side', tvShows: 'attack on titan'},
	{name:'michael', location: 'north side', tvShows: 'breaking bad'}
]

// Make an array that holds all of the colors of the rainbow.
// Write code that will access "blue" from the rainbow array.


let rainbow = ["blue","red","green","yellow"]
console.log(rainbow[0]);



// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype. Write code that will access your hobby from the object that you just created.

let yourName = {
	favFood: 'mayo',// what?!
	hobby: 'beekeeping', 
	town: 'hermosa town',
	datatype: 'social'
}

console.log(yourName.hobby)


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
console.log(crazyObject.taco[1].salsa[5]);
// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);
// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);
// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);
// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);









