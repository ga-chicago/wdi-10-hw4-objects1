// 1. boolean
// 2. string
// 3. Objects
// 4. Array
// 5. Objects - with strings
// 6. Objects - with a strings and an array

		// Take it easy

// 1. 

// let rainbowColors = ["red", "orange", "yellow", 'green', 'blue', 'indigo', 'violet'];

// // 2. 

// console.log(rainbowColors[4])

// // 3. 

// let anthony = {
// 	favFood: "tacos",
// 	hobbies: ["biking"],
// 	currentHometown: "Chicago, IL",
// 	favDatatype: "boolean"
// }

// console.log(anthony.hobbies[0])


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

//// 1.

// console.log(crazyObject.taco[1].salsa[5]);

//// 2. 

// console.log(crazyObject.larry.quotes[0])

// 3. 

// console.log(crazyObject.larry.characters[2].favourtieHobby)

// 4.

// console.log(crazyObject.larry.nicknames[1])

// 5.

// console.log(crazyObject.larry.characters[1])



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



// console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo)

// inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = 'null'

// console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo)




