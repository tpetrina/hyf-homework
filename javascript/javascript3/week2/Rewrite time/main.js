// Rewrite time

function setTimeoutPromise(resolvedAfter) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, resolvedAfter)
    });
}

function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
});

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });