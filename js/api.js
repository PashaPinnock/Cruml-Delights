document.addEventListener("DOMContentLoaded", function () {
    const city = "Montego Bay";
    const apiKey = '0d5660b6f55f74592e8faaa93e9485eb' ;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      document.getElementById("weatherData").innerText =
        `It is currently ${temperature}°C with ${description} in ${city}.`;
    } else if (xhr.readyState === 4) {
      document.getElementById("weatherData").innerText = "Failed to load weather.";
    }
  };
  xhr.send();
});