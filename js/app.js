console.log("works");
//******************ANSWER THE FOLLOWING******************
//1 a light switch with on/off
//  I would store it in an object function by using lightSwitch as a key
// and then function(){// turn on //turn off}

//2 a user's email address
//  I would store in an object called user with a key of email

//3 A spaceship with 4 things
// I would create an object called spaceShip and make a key for each item
// and if the lasers, beam, and warp drive are supposed to do something i
// would make functions for each of those keys

//4 a list of our classes students
// I would store in an array variable called students

//5 "" with location
// I would store in an object called students and for each student I would
// create objects for each student with a key of name and key of location


//6 "" with more.
// I would add a key favoriteTVshows to my previous student object to each
// of the students individual objects within the larger student object

//******************TAKE IT EASY****************************
// let rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// console.log(rainbowColors[4]);
//
// let sierra = {
//     favFood: "enchiladas",
//     hobby: "guitar",
//     lives: "chicago",
//     favDataType: "objects"
// };
// console.log(sierra.hobby);

//****************CRAZY OBJECT********************************
// const crazyObject = {
//     taco: [{meat: 'steak',cheese: ['panela', 'queso', 'chihuahua']},
//         {meat: 'chicken', salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
//     ],
//     larry: {
//         nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//         quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//         characters: [{
//             name: "Jeff",
//             occupation: "manager"
//         },
//             {
//                 name: "funkhauser",
//                 occupation: "tv dude"
//             },
//             {
//                 name: "susie",
//                 occupation: "jeffs wife",
//                 favourtieHobby: "Swearing at Larry and Jeff"
//             },
//         ]
//     }
// };
//
// //1
// console.log(crazyObject.taco[1].salsa[5]);
// //2
// console.log(crazyObject.larry.quotes[0]);
// //3
// console.log(crazyObject.larry.characters[2].favourtieHobby);
// //4
// console.log(crazyObject.larry.nicknames[1]);
// //5
// console.log(crazyObject.larry.characters[1]);

//********************OBJECT-CEPTION*******************************
// const inception = {
//     reality: {
//         dreamLayer1: {
//             dreamLayer2: {
//                 dreamLayer3: {
//                     dreamLayer4: {
//                         dreamLayer5: {
//                             dreamLayer6: {
//                                 limbo: "Joseph Gordon Levitt"
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// };
//
// inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
// console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);

//**********************BOND FILMS**********************************
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
// // add titles from array object to empty array
// let array1 = [1,2,3,4]
// array1.push(5)

// // create an empty array called bond titles
// let bondTitles = [];
// // go through each item of array
// for(i=0; i < bondFilms.length; i++){
//     // add/push this title to  array
//     bondTitles.push(bondFilms[i].title)
// }
// console.log(bondTitles);
//
// // Add odd number of years to empty array from an array object
// let oddBonds = [];
// for(i=0; i < bondFilms.length; i++){
//     if([bondFilms[i].year] % 2 === 1){
//
//         oddBonds.push(bondFilms[i].year)
//     }
// }
// console.log(oddBonds);

// console.log(bondFilms[0].gross);

/*
// it keeps a running total
let total = 0;

// iterate over bondFilms
for (i=0; i < bondFilms.length; i++){
    // get gross for this film
    let money = bondFilms[i].gross;

    //take the first charater off string
    let gross = money.substr(1).replace(/,\s?/g, ""); // copied .replace(/,\s?/g, "") it somehow removed all commas

    // turn gross for this film into a number
    let number = parseInt(gross);
    // console.log(number)


    // add number to total so far
    total = number + total;

}
console.log(total);
// console.log(bondFilms[i].gross);
*/
/***************DIGGING DEEPER ****************************/
let actors = {};
for(i=0; i < bondFilms.length; i++){
    // acess each actor
        console.log(bondFilms[i].actor)
    // isolate into object
   actors[bondFilms[i].actor] = actors;
    // check and compare each charater in strings
    // need to turn into array or array object and use slice and sort?

}
console.log(Object.keys(actors));

// iterate object
for(j=0; j < actors.length; j++){
    if(actors[key[j]].length < something.length){
        // check for dupliactes
    }
}
// log least occuring actor
console.log(something[0])










































