console.log('The Chamber of Secrets has been opented. Enemies of the Heir beware.')
/* 1. A light switch that can be either on or off.
boolean: light on == true

2. A user's email address.
string: "me@me.com"

3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
array: let spaceship = ['hull', 'laser blasters', 'tractor beam', 'warp drive']

4. A list of student names from our class.
array: let studentNames = ['Kait', 'Ryne', 'Travis', 'Sergio', 'Sierra', 'Jackson']

5. A list of student names from our class, each with a location.
object: let stuNameAndLoc = {
	Stu1: {
		name: 'Kait',
		location: 'St. Louis'
	}

	Stu2: {
		name: 'Michael',
		location: 'Chicago'
	}

	Stu3: {
		name: 'Travis',
		location: 'Portland'
	}

	Stu4 {
		name: 'Sergio',
		location:'Austin'
	}
}

6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
object with an array: let stuNameAndLoc = {
	Stu1: {
		name: 'Kait'
		location: 'St. Louis'
		favMovies: ['Breakfast at Tiffany's', 'Amelie', 'Elizabethtown']
	}

	Stu2: {
		name: 'Michael'
		location: 'Chicago'
		favMovies: ['Boondock Saints', 'Men In Black', 'Green Street Hooligans']
	}

	Stu3: {
		name: 'Travis'
		location: 'Portland'
		favMovies: ['Captain America: Civil War', 'Thor: Ragnarok', 'Wonder Woman']
	}

	Stu4 {
		name: 'Sergio'
		location:'Austin'
		favMovies: ['The Secret Life of Pets', 'Sing', 'Zootopia']
	}
}
*/


// TAKE IT EASY
// 1. may an array with all the colors of the rainbow
let roygbiv = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// 2. access blue from the array
console.log(roygbiv[4])
// 3. Make and obj, "Kait"
let kait = {
	favFood: 'pizza',
	hobby: 'running',
	city: 'Chicago',
	favData: 'strings'
}
// 4. Access Kait's hobby
console.log(kait.hobby)



// CRAZY OBJECT
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
console.log(crazyObject.taco[1].salsa[5])
// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0])
// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby)
// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1])
// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1])


// Object-ception
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

// OMG. Too many layers. Change limbo from "Joseph Gordon Levitt" to "null"
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null



// BOND FILMS
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

//  Use for loops and conditionals and methods in order to complete the below: 
// Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.

// create a variable to hold the new array
let bondTitles = [];

// use a for loop to iterate through the bondFilms array
for(let i = 0; i < bondFilms.length; i++){
	// locate the title within the array as we loop through
	// push those titles to the new array
	bondTitles.push(bondFilms[i].title)
}
// print the new array to the console
console.log(bondTitles);

// Create a new array oddBonds, of only the Bond films released on odd-numbered years.
let oddBonds = [];
// use a for loop to iterate through the bondFilms array
for(let i = 0; i < bondFilms.length; i++) {
	// identify all bondFilms that came out in an odd year
	if (bondFilms[i].year % 2 == 1) {
		// push those films to the oddBonds array
		oddBonds.push(bondFilms[i])
	}
}
// print the oddBonds array
console.log(oddBonds)

// Determine the total cumulative gross of the Bond franchise, and console.log the result. hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt also.

// .replace uses a Regular Expression to match text within a pattern. You can use a metacharacter(which is a character with special meaning) to access a specific character within a pattern (or string in this case). There are lots, but \w can be used to find a word character and \W can be used to find a non-word character. The 'g' refers to a flag - global match, which tells it to find all matches in the string instead of just one (i think). So if there were two $ it would replace both.

// create a variable to put the new value in
let bondGross = 0;
// iterate through the array
for(i = 0; i < bondFilms.length; i++) {
	// make new variable to hold gross without $ 
	// replace uses a regExp and what to replace the character/string with as arguments
	// full note on how .replace works above, also what the heck \/W/ is
	let newGross = bondFilms[i].gross.replace(/\W/g, '');
	// turn the gross into a number **NEED RADIX**
	let numberGross = parseInt(newGross, 10);
	// add the numbers to get a total
	bondGross += numberGross;
}

console.log(bondGross);
// Dang this franchise has made so much monies: $13,821,621,224.


// DIGGING DEEPER
// declare a variable to hold the object of the actor in the least films
let leastBond = {}
// iterate through the object array
for(let i = 0; i < bondFilms.length; i++) {
	// find the actor in the array
	// count how many times each actor appears

}

// compare the number of appearances
// push the actore with the least appearances to leastBond

// us a for..in loop in a for loop to get the actor? 
// then a conditional to compare the number of times, the conditional should be nested in a for loop as well



// // Just me console.logging to check things out:
// for (let key in bondFilms[0]) {
// 	console.log(key);
// }

// for (let key in bondFilms[0]) {
// 	console.log(bondFilms[0][key]);
// }











