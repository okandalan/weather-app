(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=(()=>{function e(e){return Math.round(10*e)/10}return{getData:async function(t){try{const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&units=metric&appid=177eb24cf9e5c8ddad2b2fed130150dd`,{mode:"cors"});if(!n.ok)throw new Error("City is not found! Please check your spelling.");let i=await n.json();return i=function(t){const{name:n,main:{humidity:i},weather:{0:{description:r}},wind:{speed:o}}=t;let{temp:c,feels_like:s}=t.main;return{city:n,humidity:i,weatherCondition:r,temp:e(c),feelsLike:e(s),windSpeed:o}}(i),i}catch(e){return e.message}}}})(),n=e.p+"images/clearsky.png",i=e.p+"images/fewclouds.png",r=e.p+"images/mist.png",o=e.p+"images/rain.png",c=e.p+"images/brokenclouds.png",s=e.p+"images/showerrain.png",a=e.p+"images/thunderstrom.png",d=e.p+"images/humidity.png",u=e.p+"images/windspeed.png",m=e.p+"images/feelslike.png",p=document.getElementById("cityName"),l=document.getElementById("temp"),g=document.getElementById("feelsLike"),y=document.getElementById("windSpeed"),h=document.getElementById("humidity"),f=document.getElementById("weatherCondition"),w=document.querySelector(".showHide");document.querySelector(".feelsLike").src=m,document.querySelector(".windSpeed").src=u,document.querySelector(".humidity").src=d;const E=[n,i,r,o,c,s,a],C=function(e){const t=e.weatherCondition.replace(/\s+/g,"");console.log(t),E.forEach((e=>{e.includes(t)&&(f.src=e)})),p.textContent=e.city,l.textContent=`${e.temp}°C`,g.textContent=`${e.feelsLike}°C`,y.textContent=`${e.windSpeed} km/h`,h.textContent=`${e.humidity} %`,w.classList.contains("active")||w.classList.add("active")},S=document.querySelector(".btn-submit");document.querySelector(".searchForm").addEventListener("submit",(e=>{e.preventDefault()})),S.addEventListener("click",(async function(){const e=document.getElementById("cityInput").value;if(e){console.log(e);const n=await t.getData(e);"string"==typeof n?document.getElementById("errorMessage").textContent=n:(errorMessage.textContent="",C(n))}}))})();