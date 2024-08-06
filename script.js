//Api Key and URL saved as variables
const apiKey = "9e4a750488bd964bd00f3838899a2f8f";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

//variables for the search function
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

//updating weather icon
const weatherIcon = document.querySelector(".weather-icon");

//asyncy function to obtain the city and update the weather app
async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }

  let data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML =
    Math.round(data.wind.speed) + " km/h";

  //if statement to add correct weather image
  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.png";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
