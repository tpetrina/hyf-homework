/*
 * Lets create a weather app that based on a users location
 * can find the relevant weather for that user.
 */

const apiKey = "658b2fd69ac3314fb89a600f48932ced";
const cityNameInput = document.getElementById("city-name");
const searchBtnByName = document.getElementById("searchButton");
const logLocationButton = document.getElementById("Log-location");
const userCityName = document.querySelector("h2");
const Temperature = document.querySelector("h3");
const weatherIcon = document.querySelector("img");


function weatherInfoByCityName(cityName) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
        .then(response => {
            if (response.ok) {
                document.getElementById("weather-data").style.visibility = "visible";
                return response.json();
            } else {
                alert("Please retype the city name!");
                return null;
            }
        })
        .then(data => {
            if (!data) {
                return;
            }
            localStorage.clear();
            localStorage.setItem("city", JSON.stringify(data));
            render(data);
        })
}

function weatherInfoByCoordinates(lat, lon) {
    document.getElementById("weather-data").style.visibility = "visible";

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(coordinatesData => {
            localStorage.clear();
            localStorage.setItem("city", JSON.stringify(coordinatesData));
            render(coordinatesData);
        })
}

function render(weatherData) {
    document.getElementById("weather-data").style.visibility = "visible";

    // City name
    userCityName.innerHTML = weatherData.name;

    // Temperature
    Temperature.innerHTML = `${Math.floor(weatherData.main.temp)} &degC`;

    // Weather icon
    const iconCode = weatherData.weather[0].icon;
    weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

    // Wind speed
    document.getElementById("wind-speed").innerHTML = `${Math.floor(weatherData.wind.speed)} m/s`;

    // Cloudiness
    document.getElementById("clowdy").innerHTML = weatherData.weather[0].description;

    // sunset & sunrise
    const secSunrise = weatherData.sys.sunrise;
    const timeSunrise = new Date(secSunrise * 1000);
    const timeStingSunrise = timeSunrise.toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit"
    });
    document.getElementById("sunrise").innerHTML = timeStingSunrise;

    const secSunset = weatherData.sys.sunset;
    const timeSunset = new Date(secSunset * 1000);
    const timeStingSunset = timeSunset.toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit"
    });
    document.getElementById("sunset").innerHTML = timeStingSunset;

    // map
    const latitude = weatherData.coord.lat;
    const longitude = weatherData.coord.lon;
    renderGoogleMap(latitude, longitude);
}

function renderGoogleMap(lat, lng) {
    new google.maps.Map(document.getElementById("map"), {
        center: { lat, lng },
        zoom: 8,
    });
}

searchBtnByName.addEventListener("click", () => {
    if (!cityNameInput.value) {
        alert("Please put a city name");
        return;
    }
    weatherInfoByCityName(cityNameInput.value.trim().toLocaleLowerCase());
});

logLocationButton.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;

        weatherInfoByCoordinates(lat, lng);
        renderGoogleMap(lat, lng);
    });
});

window.addEventListener("load", event => {

    if (localStorage.getItem("city")) {
        const data = JSON.parse(localStorage.getItem("city"));
        render(data);
    }
});
