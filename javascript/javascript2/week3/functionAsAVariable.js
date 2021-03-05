console.log("loaded");

/**
 * Create an array with 3 items. All items should be functions.
 * Iterate through the array and call all the functions
 */

const arrayFunction = [
    () => {
        console.log("This is the first item of our array function");
    },
    () => {
        console.log("This is the second item of our array function");
    },
    () => {
        console.log("This is the third item of our array function");
    },
];

for (const item of arrayFunction) {
    item();
}


/**
 * Create a function as a const and try creating a function normally.
 * Call both functions.
 */

const myAnonymousFunction = () => console.log("Hello I am an anonymous function");

myAnonymousFunction();

myFunction();

function myFunction() {
    console.log("Hello I am a named function");
}

/**
 * Create an object that has a key whose value is a function.
 * Try calling this function.
 */

const myObject = {
    ourKey: () => console.log("This is the key value of myObject")
}

myObject.ourKey(); 