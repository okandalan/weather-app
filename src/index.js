import { getInput, weather } from "./modules/weatherapp";

const searchBtn = document.querySelector('.btn-submit');
searchBtn.addEventListener('click', async function (e)  {
    e.preventDefault();
    const city = getInput();
    console.log(city);
    const data = await weather.getData(city);
    console.log(data);
})

