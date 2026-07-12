const weathercard = document.querySelector(".weathercard");
const weather = document.querySelector(".weather");
const closeWeather = document.querySelector(".closeWeather");
const searchWeather = document.querySelector(".search");
const inputcity = document.querySelector("#weatherCity");
const currentTemp = document.querySelector("#currentTemp");
const currentCityName = document.querySelector("#currentCityName");
const cityCondition = document.querySelector("#cityCondition");

weather.addEventListener("click", () => {
  weathercard.style.display = "flex";
});
closeWeather.addEventListener("click", () => {
  weathercard.style.display = "none";
});
searchWeather.addEventListener("click", () => {
  let cityName = inputcity.value.trim();
  if (cityName === "") {
    alert("Please Enter City Name:");
  }
  const apiKey = "1df00938b53fe0fd329528797a961443";

  async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
        alert("City Not Found!");
      }
      const data = await response.json();
      console.log(data);
      const temperature = data.main.temp;
      const cityName = data.name;
      const condition = data.weather[0].description;
      currentTemp.textContent = `${temperature}°C`;
      currentCityName.textContent = cityName;
      cityCondition.textContent = condition;
    } catch (error) {
      console.log(error.message);
    }
  }
  getWeather(cityName);
});
