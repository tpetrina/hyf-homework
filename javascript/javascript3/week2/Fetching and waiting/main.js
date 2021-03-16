// Fetching and waiting

//1.Do the steps using promises and .then.

function timeOut(delayTime) {
    return new Promise((resolve) => setTimeout(resolve, delayTime * 1000));
}

timeOut(3)
    .then(() => fetch("http://swapi.dev/api/planets/"))
    .then(response => response.json())
    .then((data) => {
        const planetNames = data.results.map((planet) => planet.name);
        console.log(planetNames);
    })
    .catch((error) => console.log(error.message));


// 2.Do the steps using async/await

async function fetchDataAsync() {
    try {
        await timeOut(6);
        const response = await fetch("http://swapi.dev/api/planets/");
        const data = await response.json();
        const planetNames = data.results.map((planet) => planet.name);
        console.log(planetNames);
    } catch (error) {
        console.log(error.message);
    }
}

fetchDataAsync();