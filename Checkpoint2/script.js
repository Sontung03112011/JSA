const apiKey = "b7085495c910c4a2c6bfad58fee2f929";

document.getElementById("cityInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getWeatherByCity(this.value);
  }
});

function getWeatherByCity(city) {
  if (!city) return;
  const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
  fetchWeather(url);
}

function getLocationWeather() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}`;
    fetchWeather(url);
  }, () => {
    alert("Unable to retrieve your location.");
  });
}

function fetchWeather(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod !== 200) {
        alert(`Error: ${data.message}`);
        return;
      }

      localStorage.setItem("weather", JSON.stringify(data));
      window.location.href = "result.html";
    })
    .catch(() => {
      alert("Error fetching weather data.");
    });
}
