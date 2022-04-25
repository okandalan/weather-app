import clearSky from '../assets/clearsky.png';
import fewClouds from '../assets/fewclouds.png';
import mist from '../assets/mist.png';
import rain from '../assets/rain.png';
import brokenClouds from '../assets/brokenclouds.png';
import showerRain from '../assets/showerrain.png';
import thunderStrom from '../assets/thunderstrom.png';
import humidityImg from '../assets/humidity.png';
import windSpeedImg from '../assets/windspeed.png';
import feelsLikeImg from '../assets/feelslike.png';

const city = document.getElementById("cityName");
const temp = document.getElementById("temp");
const feelsLike = document.getElementById("feelsLike");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const weatherCondition = document.getElementById("weatherCondition");
const showHide = document.querySelector('.showHide');


document.querySelector(".feelsLike").src = feelsLikeImg;
document.querySelector(".windSpeed").src = windSpeedImg;
document.querySelector(".humidity").src = humidityImg;


const weatherConditions = [clearSky, fewClouds, mist, rain, brokenClouds, showerRain, thunderStrom];
function setResult (data) {
    const weatherConditionNoWhiteSpace = data.weatherCondition.replace(/\s+/g, '');
    console.log(weatherConditionNoWhiteSpace);
    weatherConditions.forEach((condition) => {
        if (condition.includes(weatherConditionNoWhiteSpace)) {
            weatherCondition.src = condition;
        }
    })
    city.textContent = data.city;
    temp.textContent = `${data.temp}°C`;
    feelsLike.textContent = `${data.feelsLike}°C`;
    windSpeed.textContent = `${data.windSpeed} km/h`;
    humidity.textContent = `${data.humidity} %`;
    /* show result */
    if (!showHide.classList.contains('active')) {
        showHide.classList.add('active');
    }
}

export default setResult;