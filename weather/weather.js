const apiKey = 'YOUR_API_KEY'; // Get an API key from https://openweathermap.org/api

document.getElementById('get-weather').addEventListener('click', async function() {
  const city = document.getElementById('city-input').value.trim();
  if (city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        document.getElementById('weather-result').innerHTML = `
          <h3>${data.name}</h3>
          <p>${data.weather[0].description}</p>
          <p>Temperature: ${data.main.temp}°C</p>
        `;
      } else {
        document.getElementById('weather-result').textContent = 'City not found.';
      }
    } catch (error) {
      document.getElementById('weather-result').textContent = 'Error fetching weather.';
    }
  }
});
