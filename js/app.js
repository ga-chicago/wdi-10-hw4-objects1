




//  1. A light switch that can be either on or off.
    // boolean
//  2. A user's email address.
    //    string
//  3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
    //    object
//  4. A list of student names from our class.
    //    array
//  5. A list of student names from our class, each with a location.
    //    object
//  6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
      //  object


// 1. Make an array that holds all of the colors of the rainbow.
   const arr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// 2. Write code that will access "blue" from the rainbow array.
  arr[4];
  console.log(arr[4])
// 3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
  var Somers = {
    name: 'Somers',
    favorite_food: 'sushi',
    hobby: 'piano',
    town: 'Chicago',
    favorite_datatype: 'array'
  }
// 4. Write code that will access your hobby from the object that you just created.
Somers.hobby

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
          nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
          quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
          characters: [
                       {
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

      // 1. "omg my mouth is burning"
      crazyObject.taco[1].salsa[5];
      // 2. "Pretty pretty prettayyyyy good"
      crazyObject.taco
      // 3. "Swearing at Larry and Jeff"
      crazyObject.larry.characters[2].favourtieHobby
      // 4. "Chicken Teriyaki Boyyyyyy"
      crazyObject.larry.nicknames[1]
      // 5. The object the contains the name `funkhauser`
      crazyObject.larry.characters[1].name

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

// Change the value of `limbo` to `null`.
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null


// bondFilm object
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

 // Create a new array called `bondTitles` with only the titles of the Bond films, and console.log the new array.
//

 for(let i in bondFilms) {
console.log(bondFilms[i].title);
 }
// Create a new array `oddBonds`, of only the Bond films released on odd-numbered years.
let arrayOfTitles = []
for(let i in bondFilms) {

  let year = bondFilms[i].year;

  if(year%2===1){
  arrayOfTitles.push(bondFilms[i].title);
  }
}
console.log(arrayOfTitles);
// Determine the total cumulative gross of the Bond franchise, and console.log the result. _hint_ To make the grosses into usable numbers, look into the `.replace` Javascript method (there are many ways to do this, however). Look into `parseInt` also.
let str = "";
let num = 0;
let sum = 0;
for(let i in bondFilms){
str = bondFilms[i].gross
str = str.replace(/,/g, "")
str = str.substring(1)

num = parseInt(str)
sum = sum + num
}
console.log(sum + " dollars");

// declare empty array
let arrayOfActors = []
for(let i in bondFilms) {
  arrayOfActors.push(bondFilms[i].actor)
}

// sort the array of actors in alphabetical order
arrayOfActors.sort();


// declare array for storing the actor frequency objects
let actorsFrequencyArray = [] ;
// declare frequency object array
let actorsFrequencyObject = new Object()
// initialize first values for actors frequency object
actorsFrequencyObject.actor = arrayOfActors[0]
actorsFrequencyObject.frequency = 0;
// set the initial frequency to zero
let frequency = 0;


// loop to go through the array of actors
for(let i = 0; i<arrayOfActors.length; i++){
// reset the frequency to zero
  actorsFrequencyObject.frequency = 0;

// if the current actor equals the next one then do this
  if(arrayOfActors[i] === arrayOfActors[i+1]){
// count frequency up
  frequency = frequency + 1;
  // set the object frequency to equal frequency
  actorsFrequencyObject.frequency = frequency;

  // if the current actor does not equal the next actor then do this
  } else if(arrayOfActors[i] != arrayOfActors[i+1]) {
    // bump up frequency one last time
    frequency = frequency + 1;
    // set that frequency to the object
  actorsFrequencyObject.frequency = frequency;

  // push that object to an array
  actorsFrequencyArray.push(actorsFrequencyObject);

  }
  // create new object, can't do this in conditional above because of asynchronisity maybe?
  if(arrayOfActors[i] != arrayOfActors[i+1]) {
  actorsFrequencyObject = new Object()
  frequency = 0;
  actorsFrequencyObject.actor = arrayOfActors[i+1];
  }
}
 console.log(actorsFrequencyArray);


// Console log the single movie **object** that contains the actor who starred in the least number of films.
let lowestFrequency = 100;
// run through the actors Frequency to find the lowest frequency
for(let i = 0; i<actorsFrequencyArray.length;i++) {
  // conditional to check for a new lowestFrequency
  if(actorsFrequencyArray[i].frequency<lowestFrequency) {
    lowestFrequency = actorsFrequencyArray[i].frequency
  }
}



// something to store the lowest frequency actor
  var leastPerformingActor = "John Doe";

    for(let i=0; i<actorsFrequencyArray.length; i++)
    {
      // if the actor is the lowest frequency
      if(actorsFrequencyArray[i].frequency == lowestFrequency){
      // set it to the variable on line 223
          leastPerformingActor = actorsFrequencyArray[i].actor;

      }
    }


    for(let i = 0; i<bondFilms.length;i++) {
      if(bondFilms[i].actor == leastPerformingActor){
        console.log(bondFilms[i]);
      }
    }
