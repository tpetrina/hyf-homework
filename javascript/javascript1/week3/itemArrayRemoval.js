/*
 * Javascript file for Hack Your Future, Javascript1, homework Week3
 * program will remove a name from the list 
*/

// Item array removal

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
function nameRemoval(list, name) {
    const nameIndex = list.indexOf(name);
    list.splice(nameIndex, 1);
};

// Code done
nameRemoval(names, nameToRemove);
console.log(names);