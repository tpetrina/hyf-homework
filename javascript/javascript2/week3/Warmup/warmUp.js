console.log("file loaded");

// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout(() => console.log("Called after 2.5 seconds"), 2500);

// 2.Creat a function which log out the stringToLog after delay seconds.

function delayLogOut(delay, stringToLog) {
    setTimeout(() => console.log(stringToLog), delay * 1000);
}
delayLogOut(4, "Thank you for reviewing my homework");
delayLogOut(8, "Today is a great sunny day");
delayLogOut(10, "Always be happy");

// 3. Create a button to log out the text: Called after 5 seconds ,5 seconds after the button is clicked.

const fiveSecButton = document.getElementById("log-after-5sec");
fiveSecButton.addEventListener("click", () => delayLogOut(5, "Called after 5 seconds"));

// # 4

const earthLogger = () => console.log("Hello from earth");
const saturnLogger = () => console.log("Hello from Saturn");

function planetLogFunction(callback) {
    callback;
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// # 5 , # 6

const logLocationButton = document.getElementById("Log-location");
let latitudeInfo = document.getElementById("latitude-info");
let longitudeInfo = document.getElementById("longitude-info");

logLocationButton.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;

        latitudeInfo.innerHTML = `This is the latitude : ${lat}`;
        longitudeInfo.innerHTML = `This is the longitude : ${lng}`;

        renderGoogleMap(lat, lng);
    });
});

function renderGoogleMap(lat, lng) {
    console.log(lat);
    let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat, lng },
        zoom: 8,
    });
}

// # 7

function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000);
}

runAfterDelay(8, function () {
    console.log(`Should be logged after 8 seconds`);
});

runAfterDelay(15, function () {
    console.log(`We will be ready after 15 seconds`);
});


// # 8

let clickCount = 0;

document.addEventListener("click", function () {
    clickCount++;

    if (clickCount === 1) {
        setTimeout(() => {
            if (clickCount === 2) {
                console.log(`Double click!`);
                clickCount = 0;
            } else {
                clickCount = 0;
            }
        }, 500)
    }
});

// # 9

function logFunnyJoke() {
    return "Don't trust javascript programmers.All they do is promises but they never callback. :))";
}

function logBadJoke() {
    return "What do you call a belt made of watches? A waist of time!";
}

function jokeCreator(shouldTellFunnyJoke = false, logFunnyJoke, logBadJoke) {
    return shouldTellFunnyJoke ? logFunnyJoke : logBadJoke;
}

console.log(jokeCreator(true, logFunnyJoke(), logBadJoke()));
