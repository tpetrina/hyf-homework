// Fetching and waiting

//1.Do the steps using promises and .then.

function timeOut(delayTime) {
    return new Promise((resolve) => setTimeout(resolve, delayTime * 1000));
}

function fetchData() {
    timeOut(3)
        .then(() => fetch("http://swapi.dev/api/planets/"))
        .then(response => response.json())
        .then((data) => {
            const planetNames = data.results.map((planet) => planet.name);
            console.log(planetNames);
        })
        .catch((error) => console.log(error.message));
}

fetchData();

// 2.Do the steps using async/await

async function fetchDataAsync() {
    await timeOut(5);
    try {
        const response = await fetch("http://swapi.dev/api/planets/");
        const data = await response.json();
        const planetNames = data.results.map((planet) => planet.name);
        console.log(planetNames);
    } catch (error) {
        console.log(error.message);
    }
}

fetchDataAsync();