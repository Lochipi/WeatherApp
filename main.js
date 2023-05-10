// console.log("Hello world!");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey = "2a6e6c0eb36f973d34de622cd326522f";

const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");

async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    // return data;
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/hr";
  }

  searchBtn.addEventListener('click', ()=> {
    getWeather(searchBox.value);
  });
  