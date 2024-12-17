const apikey = "bc28a69850a92b7c5fc6a1caff4f3e02";
// api for getting country  lat & lon

async function checkWeather() {
  const citySearch = document.querySelector(".city-search");
  const city = citySearch.value;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=`;

  try {
    const response = await fetch(apiUrl + apikey);
    var data = await response.json();
  } catch (error) {
    console.log("error 404");
  }

  console.log(data);
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "m/s";
  document.querySelector(".city").innerHTML =
    data.name + ", " + data.sys.country;
  document.querySelector(".lat").innerHTML =
    "lat. " + Math.round(data.coord.lat * 100) / 100 + " °";
  document.querySelector(".lon").innerHTML =
    "lon. " + Math.round(data.coord.lon * 100) / 100 + " °";

  let weatherIcon = document.querySelector(".weather-img");
  if ((data.weather[0].main = "clouds")) {
    weatherIcon.src = "./src/images/clouds.png";
  } else if ((data.weather[0].main = "snow")) {
    weatherIcon.src = "./src/images/snow.png";
  } else if ((data.weather[0].main = "clear")) {
    weatherIcon.src = "./src/images/clear.png";
  } else if ((data.weather[0].main = "drizzle")) {
    weatherIcon.src = "./src/images/drizzle.png";
  } else if ((data.weather[0].main = "humidity")) {
    weatherIcon.src = "./src/images/humidity.png";
  } else if ((data.weather[0].main = "mist")) {
    weatherIcon.src = "./src/images/mist.png";
  } else if ((data.weather[0].main = "rain")) {
    weatherIcon.src = "./src/images/rain.png";
  } else if ((data.weather[0].main = "wind")) {
    weatherIcon.src = "./src/images/wind.png";
  } else {
    ("really abnormal weather");
  }
}

const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", checkWeather);
