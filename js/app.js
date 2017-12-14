//1 
"A light switch would be most like a boolean. A light switch is either on or off just like a boolean is true or flase. there is no middle ground." "lightbulb on" = true

//2
"An email is most like a string, it is just a line of text." 

//3
 "a spaceship is most like an object ex":

let spaceShip = {

hull: {

weapon: "laser blaster",

extractionUtility: "tractor beam",

engines: "warp dirve"

}

}


//4
  A student names list would be most similar to an array filled with strings ["ethan", "",]etc

//5 
"a list of student names with location would be like an object"
let attendance = {
  ethan: "home",
  ryne: "GA"
};

//6
"A list of student names with a location and favorite tv show would be like an object nested in an array"
let attendance = [
  {name:'ethan', location: 'GA', favoriteTvShow:'Game of thrones'}]

//Take it easy



//1

let rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];


//2

rainbowColors[4]


//3

let ethan = {

favoriteFood: "bananas",

hobby: "collecting rare coins",

currentTown: "palos park",

favoriteDatatype: "objects"

}


//4

ethan.hobby

//crazy object


//1

conlose.log(crazyObject.taco[1].salsa[5])


//2


console.log(crazyObject.larry.quotes[0])


//3

console.log(crazyObjet.larry.characters[2].favouriteHobby)


//4

console.log(crazyObjects.larry[0].nicknames[1]_


//5

console.log(crazyObject.larry[1].name)


//object-ception


//1

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6


//bond films

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


let bondTitles = [];
 for(let i in bondFilms){
  console.log(bondFilms[i].title)
 }

//odd bonds 
let oddBonds = [];
for(let i in bondFilms) {

  let year = bondFilms[i].year;

  if(year%2===1){
  arrayOfTitles.push(bondFilms[i].title);
  }
}


//digging deeper

let bondActors = {

}
//iterating over the bond films array 
for(i=0;i<bondFilms.length;i++){
  bondActors
}\
  bondActors[bondFilms[i].actor] = []
} 
let actorKey = Object.keys(bondActors)


for(let i = 0; i < bondFilms.length; i++){
  bondActors[bondFilms[i].actor].push(bondFilms[i])
} console.log(bondActors)



let shortest = bondFilms

for(i = 0; i < actorKey.length; i++){
  if (bondActors[actorKey[i]].length < shortest.length) {
    shortest = bondActors[actorKey[i]]
  }
  else {
  }
} 
console.log(shortest[0])
