const apiKey = "e75dd3e7ef386cfe7d111a6a8841d581";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const btni = document.querySelector("#btni");
const search = document.querySelector("#city");
const weatherIcon = document.querySelector(".middle img");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector("#city").value = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "<sup>o</sup>c";
    document.querySelector("#citymiddle").innerHTML = data.name;
    document.querySelector("#perh").innerHTML = data.main.humidity + "%";
    document.querySelector("#perw").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/images/mist.png";
    }
}

btni.addEventListener("click", () => {
    checkWeather(search.value);
    document.querySelector(".weather-container").style.display = "block";
});

window.onload = () => {
    document.getElementById("city").value = "";
}
