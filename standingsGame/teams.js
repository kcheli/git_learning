// const math = require('mathjs')
const permutations = require('./itertools');

class Team {
   constructor(name, abbreviation) {
      this.name = name;
      this.abbreviation = abbreviation.toUpperCase()
      this.points = 0;
      this.goalDiff = 0;
      this.singleGamePointsHolder = 0;
   };
};


const mun = new Team("Manchester United", "MUN")
const che = new Team("Chelsea", "CHE")
const tot = new Team("Tottenham Hotspurs", "TOT")
const liv = new Team("Liverpool", "LIV")
const ars = new Team("Arsenal", "ARS")
const mci = new Team("Manchester City", "MCI")
const eve = new Team("Everton", "EVE")
const lci = new Team("Leicester", "LCI")
const whu = new Team("West Ham United", "WHU")
const allTeams = [mun, che, tot, liv, ars, mci, eve, lci, whu]

const a = permutations.permutation(allTeams, 2)
console.log("permutations: ", Array.from(a))


// function x(args) {
//    let y = args.y ? args.y : null 
//    let z = args.z ? args.z : null

//    console.log("y: ", y)
//    console.log("z: ", z)
// }

// x({})
// x({y: 'y'})
// x({z: 'z'})
// x({y: 'y', z: 'z'})