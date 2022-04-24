/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/domFunctions.js":
/*!*************************************!*\
  !*** ./src/modules/domFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setResult);

/***/ }),

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
            weather: {'0': {description : weatherCondition}},
            wind: {speed: windSpeed}
        } = data


        let {
            temp,
            feels_like: feelsLike,
                        
        } = data.main
        
        return {
            city,
            humidity,
            weatherCondition,
            temp: roundAfterOneDigit(temp),
            feelsLike: roundAfterOneDigit(feelsLike),
            windSpeed
        };
    }

    async function getData (city){
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=177eb24cf9e5c8ddad2b2fed130150dd`, {mode : 'cors'});
            if (!response.ok) {
                throw new Error(`City is not found! Please check your spelling.`);
            }
            let data = await response.json();
            data = processData(data);
            return data;            
        }
        catch (err) {
            return err.message;
        }

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
/* harmony import */ var _modules_domFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/domFunctions */ "./src/modules/domFunctions.js");



const searchBtn = document.querySelector('.btn-submit');
const form = document.querySelector('.searchForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

searchBtn.addEventListener('click', async function ()  {
    const city = (0,_modules_weatherapp__WEBPACK_IMPORTED_MODULE_0__.getInput)();
    /* buraya gelen input string mi onu kontrol etme ekle  */
    if (city) {
        console.log(city);
        const data = await _modules_weatherapp__WEBPACK_IMPORTED_MODULE_0__.weather.getData(city);
        (0,_modules_domFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
    }

})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFVBQVU7QUFDcEMsK0JBQStCLGVBQWU7QUFDOUMsK0JBQStCLGdCQUFnQjtBQUMvQyw4QkFBOEIsZUFBZTtBQUM3Qzs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUNqQnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QixzQkFBc0IsTUFBTSxnQ0FBZ0M7QUFDNUQsbUJBQW1CO0FBQ25CLFVBQVU7OztBQUdWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4RkFBOEYsS0FBSyx3REFBd0QsY0FBYztBQUN6SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7Ozs7Ozs7VUN2REQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOeUQ7QUFDVDs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGlCQUFpQiw2REFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0VBQWU7QUFDMUMsUUFBUSxpRUFBUztBQUNqQjs7QUFFQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kb21GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyYXBwLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eU5hbWVcIik7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wXCIpO1xuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc0xpa2VcIik7XG5jb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRTcGVlZFwiKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodW1pZGl0eVwiKTtcbmNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJDb25kaXRpb25cIik7XG5cblxuZnVuY3Rpb24gc2V0UmVzdWx0IChkYXRhKSB7XG4gICAgd2VhdGhlckNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGRhdGEud2VhdGhlckNvbmRpdGlvbjtcbiAgICBjaXR5LnRleHRDb250ZW50ID0gZGF0YS5jaXR5O1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtkYXRhLnRlbXB9wrBDYDtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZlZWxzTGlrZX3CsENgO1xuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke2RhdGEud2luZFNwZWVkfSBrbS9oYDtcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEuaHVtaWRpdHl9ICVgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRSZXN1bHQ7IiwiZnVuY3Rpb24gZ2V0SW5wdXQoKSB7XG4gICAgY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5SW5wdXRcIik7XG4gICAgY29uc3QgY2l0eSA9IGlucHV0Rm9ybS52YWx1ZTtcbiAgICByZXR1cm4gY2l0eTtcbn1cblxuY29uc3Qgd2VhdGhlciA9ICggKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gcm91bmRBZnRlck9uZURpZ2l0KG4pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobiAqIDEwKSAvIDEwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NEYXRhIChkYXRhKSB7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbmFtZTogY2l0eSxcbiAgICAgICAgICAgIG1haW46IHtodW1pZGl0eX0sXG4gICAgICAgICAgICB3ZWF0aGVyOiB7JzAnOiB7ZGVzY3JpcHRpb24gOiB3ZWF0aGVyQ29uZGl0aW9ufX0sXG4gICAgICAgICAgICB3aW5kOiB7c3BlZWQ6IHdpbmRTcGVlZH1cbiAgICAgICAgfSA9IGRhdGFcblxuXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICB0ZW1wLFxuICAgICAgICAgICAgZmVlbHNfbGlrZTogZmVlbHNMaWtlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH0gPSBkYXRhLm1haW5cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaXR5LFxuICAgICAgICAgICAgaHVtaWRpdHksXG4gICAgICAgICAgICB3ZWF0aGVyQ29uZGl0aW9uLFxuICAgICAgICAgICAgdGVtcDogcm91bmRBZnRlck9uZURpZ2l0KHRlbXApLFxuICAgICAgICAgICAgZmVlbHNMaWtlOiByb3VuZEFmdGVyT25lRGlnaXQoZmVlbHNMaWtlKSxcbiAgICAgICAgICAgIHdpbmRTcGVlZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEgKGNpdHkpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD0xNzdlYjI0Y2Y5ZTVjOGRkYWQyYjJmZWQxMzAxNTBkZGAsIHttb2RlIDogJ2NvcnMnfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDaXR5IGlzIG5vdCBmb3VuZCEgUGxlYXNlIGNoZWNrIHlvdXIgc3BlbGxpbmcuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGRhdGEgPSBwcm9jZXNzRGF0YShkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhOyAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnIubWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXREYXRhfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGdldElucHV0LCB3ZWF0aGVyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRJbnB1dCwgd2VhdGhlciB9IGZyb20gXCIuL21vZHVsZXMvd2VhdGhlcmFwcFwiO1xuaW1wb3J0IHNldFJlc3VsdCAgZnJvbSBcIi4vbW9kdWxlcy9kb21GdW5jdGlvbnNcIjtcblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1zdWJtaXQnKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoRm9ybScpO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSlcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCkgIHtcbiAgICBjb25zdCBjaXR5ID0gZ2V0SW5wdXQoKTtcbiAgICAvKiBidXJheWEgZ2VsZW4gaW5wdXQgc3RyaW5nIG1pIG9udSBrb250cm9sIGV0bWUgZWtsZSAgKi9cbiAgICBpZiAoY2l0eSkge1xuICAgICAgICBjb25zb2xlLmxvZyhjaXR5KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXIuZ2V0RGF0YShjaXR5KTtcbiAgICAgICAgc2V0UmVzdWx0KGRhdGEpO1xuICAgIH1cblxufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9