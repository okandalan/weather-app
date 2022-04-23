import { getInput, weather } from "./modules/weatherapp";

const searchBtn = document.querySelector('.btn-submit');
const form = document.querySelector('.searchForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

searchBtn.addEventListener('click', async function ()  {
    const city = getInput();
    if (city) {
        console.log(city);
        const data = await weather.getData(city);
        console.log(data);        
    }

})

