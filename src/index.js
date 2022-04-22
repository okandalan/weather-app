import { getInput } from "./modules/weatherapp";

const searchBtn = document.querySelector('.btn-submit');
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const city = getInput();
    console.log(city);
})
