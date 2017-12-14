/*

// 1. boolean - there are only true states
// 2. string - does it contain @?
// 3. Objects - there are a lot of working parts to one thing
// 4. Array - A lot of things with no detail
// 5. Objects - there are a lot of working parts to one thing, with more detail.
// 6. Objects - there are a lot of working parts to one thing, with even more detail.

<!-- //Take it easy -->
    
    

let rainbowColors = ["red", "blue", "yellow", 'orange', 'green', 'purple'];

console.log(rainbowColors[1])

let Charles = {
	favFood: "Broccoli",
	hobbies: ["Video games"],
	currentHometown: "Chicago",
	favDatatype: "boolean"
    
    console.log(Charles.hobbies[0])




const crazyObject = {
    taco: [{
            meat: 'steak',
            cheese: ['panela', 'queso', 'chihuahua']
        },
        {
            meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
        },
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

// 1.

console.log(crazyObject.taco[1].salsa[5]);

// 2. 

console.log(crazyObject.larry.quotes[0])

// 3. 

console.log(crazyObject.larry.characters[2].favourtieHobby)

// 4.

console.log(crazyObject.larry.nicknames[1])

// 5.

console.log(crazyObject.larry.characters[1])


*/


<!-- //Object-ception -->


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

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = 'null'

console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo)
