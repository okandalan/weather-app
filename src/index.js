import { getInput, weather } from "./modules/weatherapp";
import setResult  from "./modules/domFunctions";

const searchBtn = document.querySelector('.btn-submit');
const form = document.querySelector('.searchForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

searchBtn.addEventListener('click', async function ()  {
    const city = getInput();
    if (city) {
        const data = await weather.getData(city);
        if (typeof data === 'string') {
            const errorMessage = document.getElementById("errorMessage");
            errorMessage.textContent = data;
        }
        else {
            errorMessage.textContent = '';
            setResult(data);
        }       
    }

})

