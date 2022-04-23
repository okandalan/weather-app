function getInput() {
    const inputForm = document.getElementById("cityInput");
    const city = inputForm.value;
    return city;
}

const weather = ( () => {

    function roundAfterOneDigit(n) {
        return Math.round(n * 10) / 10;
    }

    function processData (data) {

        const {
            name: city,
            main: {humidity},
            weather: {'0': {main : weatherCondition}},
            wind: {speed: windSpeed}
        } = data


        let {
            temp,
            temp_min:  minTemp,
            temp_max: maxTemp,
            feels_like: feelsLike,
                        
        } = data.main
        
        return {
            city,
            humidity,
            weatherCondition,
            temp: roundAfterOneDigit(temp),
            minTemp: roundAfterOneDigit(minTemp),
            maxTemp: roundAfterOneDigit(maxTemp),
            feelsLike: roundAfterOneDigit(feelsLike),
            windSpeed
        };
    }

    async function getData (city){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=177eb24cf9e5c8ddad2b2fed130150dd`, {mode : 'cors'});
        let data = await response.json();
        data = processData(data);
        return data;
    }

    return {getData};
})();

export { getInput, weather };