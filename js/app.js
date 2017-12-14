// 1. A light switch that can be either on or off.

// boolean

// 2. A user's email address.

// a variable

// 3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.

// an object

// 4. A list of student names from our class.

// an array containing objects 

// 5. A list of student names from our class, each with a location.

// an array containing objects 

// 6. A list of student names from our class, each with a location and each with a list of favorite tv shows.

// an array containing objects 

// let rainbow = ["red", "orange", "yellow", "green", "blue", "purple"];

// console.log(rainbow[4]);

// let Jackson = {
// 	favoriteFood: "Chicago dog",
// 	hobby: "graphic design",
// 	town: "Chicago",
// 	favoriteDatatype: "objects"
// }

// console.log(Jackson.hobby);




// const crazyObject = {
// 	taco: 
// 	[{
// 	  	meat: 'steak', 
// 	  	cheese: ['panela', 'queso', 'chihuahua']
// 		},
// 		{
// 	  	meat: 'chicken',
// 	    salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
// 	},],
// 	larry: 
// 	{
// 	    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
// 	    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
// 	    characters: 
// 	    [{
// 	      name: "Jeff",
// 	      occupation: "manager"
// 	    },
// 	    {
// 	      name: "funkhauser",
// 	      occupation: "tv dude"
// 	    },
// 	    {
// 	      name: "susie",
// 	      occupation: "jeffs wife",
// 	      favourtieHobby: "Swearing at Larry and Jeff"
// 	    },]
// 	}
// }

// console.log(crazyObject.taco[1].salsa[5]);

// console.log(crazyObject.larry.quotes[0]);

// console.log(crazyObject.larry.characters[2].favourtieHobby);

// console.log(crazyObject.larry.nicknames[1]);

// console.log(crazyObject.larry.characters[1]);

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

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = "null";

console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo)