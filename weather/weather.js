const apiKey = "51bbe986e9025e50927a61e97bbd0069"; // <-- Replace this with your actual OpenWeatherMap API key
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.jpg";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.jpg";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.jpg";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.jpg";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.jpg";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
