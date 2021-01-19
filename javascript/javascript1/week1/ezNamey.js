/*
 * Hack Your Future, Javascript, homework Week1
 * this file includes:
  4. Ez Namey (Startup name generator) 
*/


// 4. Ez Namey (Startup name generator)

const firstWords = ["Easy", "Awesome", "Corporate", "Amazing", "Helpful", "Perfect", "Attractive", "Excellent", "onderful", "Incredible"]
const secondWords = ["Company", "Firm", "Agency", "Group", "Business", "Team", "Corporation", "Partnership", "Institution", "Association"]

const randomNumber = Math.floor(Math.random() * 10) + 0;

let startupName = firstWords[randomNumber]+ " " + secondWords[randomNumber];

console.log("The startup: " + `"` + startupName +`"` + " contains " + startupName.length + " characters" )






