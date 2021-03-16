// Fetching and waiting

//1.Do the steps using promises and .then.

function timeOut(delayTime) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const planets = fetch("http://swapi.dev/api/planets/");
            resolve(planets);
        }, delayTime * 1000);
    })
}

timeOut(3)
    .then(response => response.json())
    .then((data) => {
        const planetNames = data.results.map((planet) => planet.name);
        console.log(planetNames);
    })
    .catch((error) => console.log(error.message));


// 2.Do the steps using async/await

async function fetchDataAsync() {
    try {
        const response = await timeOut(6);
        const data = await response.json();
        const planetNames = data.results.map((planet) => planet.name);
        console.log(planetNames);
    } catch (error) {
        console.log(error.message);
    }
}

fetchDataAsync();