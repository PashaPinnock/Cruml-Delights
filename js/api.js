document.addEventListener("DOMContentLoaded", function () {
    const city = "Montego Bay";
    const apiKey = '0d5660b6f55f74592e8faaa93e9485eb';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to load weather.");
        }
        return response.json();
      })
      .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        document.getElementById("weatherData").innerText = 
          `It is currently ${temperature}°C with ${description} in ${city}.`;
      })
      .catch(error => {
        document.getElementById("weatherData").innerText = error.message;
      });
  });