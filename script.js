const apiKey = "d5a076cc6ce343d002fda486313a2a77"; // Your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("city-input").value.trim();

  if (!city) {
    document.getElementById("weather-result").innerHTML = `<p>Please enter a city name.</p>`;
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const weatherData = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weather-result").innerHTML = weatherData;
    })
    .catch(error => {
      document.getElementById("weather-result").innerHTML = `<p style="color: red;">${error.message}</p>`;
    });
}
