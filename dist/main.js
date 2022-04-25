(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=(()=>{function e(e){return Math.round(10*e)/10}return{getData:async function(t){try{const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&units=metric&appid=177eb24cf9e5c8ddad2b2fed130150dd`,{mode:"cors"});if(!n.ok)throw new Error("City is not found! Please check your spelling.");let i=await n.json();return i=function(t){const{name:n,main:{humidity:i},weather:{0:{description:r}},wind:{speed:o}}=t;let{temp:c,feels_like:s}=t.main;return{city:n,humidity:i,weatherCondition:r,temp:e(c),feelsLike:e(s),windSpeed:o}}(i),i}catch(e){return e.message}}}})(),n=e.p+"images/clearsky.png",i=e.p+"images/fewclouds.png",r=e.p+"images/mist.png",o=e.p+"images/rain.png",c=e.p+"images/brokenclouds.png",s=e.p+"images/scatteredclouds.png",a=e.p+"images/showerrain.png",d=e.p+"images/thunderstrom.png",u=e.p+"images/humidity.png",m=e.p+"images/windspeed.png",p=e.p+"images/feelslike.png",l=document.getElementById("cityName"),g=document.getElementById("temp"),y=document.getElementById("feelsLike"),h=document.getElementById("windSpeed"),f=document.getElementById("humidity"),w=document.getElementById("weatherCondition"),E=document.querySelector(".showHide");document.querySelector(".feelsLike").src=p,document.querySelector(".windSpeed").src=m,document.querySelector(".humidity").src=u;const C=[n,i,r,o,c,a,d,s],S=function(e){const t=e.weatherCondition.replace(/\s+/g,"");console.log(t),C.forEach((e=>{e.includes(t)&&(w.src=e)})),l.textContent=e.city,g.textContent=`${e.temp}°C`,y.textContent=`${e.feelsLike}°C`,h.textContent=`${e.windSpeed} km/h`,f.textContent=`${e.humidity} %`,E.classList.contains("active")||E.classList.add("active")},b=document.querySelector(".btn-submit");document.querySelector(".searchForm").addEventListener("submit",(e=>{e.preventDefault()})),b.addEventListener("click",(async function(){const e=document.getElementById("cityInput").value;if(e){console.log(e);const n=await t.getData(e);"string"==typeof n?document.getElementById("errorMessage").textContent=n:(errorMessage.textContent="",S(n))}}))})();