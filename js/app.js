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

// Take it Easy
// 1.
let roygbiv = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// 2.
console.log(roygbiv[4])
// 3.
let kait = {
	favFood: 'pizza',
	hobby: 'running',
	city: 'Chicago',
	favData: 'strings'
}
// 4. 
console.log(kait.hobby)

// Crazy Object
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

// OMG. Too many layers.
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null































































