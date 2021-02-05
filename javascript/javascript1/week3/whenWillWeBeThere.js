/*
 * Javascript file for Hack Your Future, Javascript1, homework Week3
 * program return the time it will take to arrive at the destination.
*/

// When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function timeToDestination(info) {
    let time = travelInformation.destinationDistance / travelInformation.speed;
    let hours = Math.floor(time);
    let minutes = Math.floor((time - hours) * 60);
    return `${hours} hours and ${minutes} minutes.`;
};

const travelTime = timeToDestination(travelInformation);
console.log(travelTime);