const city = document.getElementById("cityName");
const temp = document.getElementById("temp");
const feelsLike = document.getElementById("feelsLike");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const weatherCondition = document.getElementById("weatherCondition");


function setResult (data) {
    weatherCondition.textContent = data.weatherCondition;
    city.textContent = data.city;
    temp.textContent = `${data.temp}°C`;
    feelsLike.textContent = `${data.feelsLike}°C`;
    windSpeed.textContent = `${data.windSpeed} km/h`;
    humidity.textContent = `${data.humidity} %`;
}

export default setResult;