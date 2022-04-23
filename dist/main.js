/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/weatherapp.js":
/*!***********************************!*\
  !*** ./src/modules/weatherapp.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInput": () => (/* binding */ getInput),
/* harmony export */   "weather": () => (/* binding */ weather)
/* harmony export */ });
function getInput() {
    const inputForm = document.getElementById("cityInput");
    const city = inputForm.value;

    /* regex kullanarak whitespaceleri felan temizle */
    if (!city) {
        return '';
    }

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
        return data;
    }

    return {getData};
})();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weatherapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherapp */ "./src/modules/weatherapp.js");


const searchBtn = document.querySelector('.btn-submit');
searchBtn.addEventListener('click', async function (e)  {
    e.preventDefault();
    const city = (0,_modules_weatherapp__WEBPACK_IMPORTED_MODULE_0__.getInput)();
    console.log(city);
    const data = await _modules_weatherapp__WEBPACK_IMPORTED_MODULE_0__.weather.getData(city);
    console.log(data);
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCLHNCQUFzQixNQUFNLHlCQUF5QjtBQUNyRCxtQkFBbUI7QUFDbkIsVUFBVTs7O0FBR1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBGQUEwRixLQUFLLHdEQUF3RCxjQUFjO0FBQ3JLO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7Ozs7Ozs7VUN2REQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ055RDs7QUFFekQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZEQUFRO0FBQ3pCO0FBQ0EsdUJBQXVCLGdFQUFlO0FBQ3RDO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlcmFwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldElucHV0KCkge1xuICAgIGNvbnN0IGlucHV0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eUlucHV0XCIpO1xuICAgIGNvbnN0IGNpdHkgPSBpbnB1dEZvcm0udmFsdWU7XG5cbiAgICAvKiByZWdleCBrdWxsYW5hcmFrIHdoaXRlc3BhY2VsZXJpIGZlbGFuIHRlbWl6bGUgKi9cbiAgICBpZiAoIWNpdHkpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBjaXR5O1xufVxuXG5jb25zdCB3ZWF0aGVyID0gKCAoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiByb3VuZEFmdGVyT25lRGlnaXQobikge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChuICogMTApIC8gMTA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0RhdGEgKGRhdGEpIHtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBuYW1lOiBjaXR5LFxuICAgICAgICAgICAgbWFpbjoge2h1bWlkaXR5fSxcbiAgICAgICAgICAgIHdlYXRoZXI6IHsnMCc6IHttYWluIDogd2VhdGhlckNvbmRpdGlvbn19LFxuICAgICAgICAgICAgd2luZDoge3NwZWVkOiB3aW5kU3BlZWR9XG4gICAgICAgIH0gPSBkYXRhXG5cblxuICAgICAgICBsZXQge1xuICAgICAgICAgICAgdGVtcCxcbiAgICAgICAgICAgIHRlbXBfbWluOiAgbWluVGVtcCxcbiAgICAgICAgICAgIHRlbXBfbWF4OiBtYXhUZW1wLFxuICAgICAgICAgICAgZmVlbHNfbGlrZTogZmVlbHNMaWtlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH0gPSBkYXRhLm1haW5cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaXR5LFxuICAgICAgICAgICAgaHVtaWRpdHksXG4gICAgICAgICAgICB3ZWF0aGVyQ29uZGl0aW9uLFxuICAgICAgICAgICAgdGVtcDogcm91bmRBZnRlck9uZURpZ2l0KHRlbXApLFxuICAgICAgICAgICAgbWluVGVtcDogcm91bmRBZnRlck9uZURpZ2l0KG1pblRlbXApLFxuICAgICAgICAgICAgbWF4VGVtcDogcm91bmRBZnRlck9uZURpZ2l0KG1heFRlbXApLFxuICAgICAgICAgICAgZmVlbHNMaWtlOiByb3VuZEFmdGVyT25lRGlnaXQoZmVlbHNMaWtlKSxcbiAgICAgICAgICAgIHdpbmRTcGVlZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEgKGNpdHkpe1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPTE3N2ViMjRjZjllNWM4ZGRhZDJiMmZlZDEzMDE1MGRkYCwge21vZGUgOiAnY29ycyd9KTtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0RGF0YX07XG59KSgpO1xuXG5leHBvcnQgeyBnZXRJbnB1dCwgd2VhdGhlciB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2V0SW5wdXQsIHdlYXRoZXIgfSBmcm9tIFwiLi9tb2R1bGVzL3dlYXRoZXJhcHBcIjtcblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1zdWJtaXQnKTtcbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uIChlKSAge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjaXR5ID0gZ2V0SW5wdXQoKTtcbiAgICBjb25zb2xlLmxvZyhjaXR5KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlci5nZXREYXRhKGNpdHkpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9