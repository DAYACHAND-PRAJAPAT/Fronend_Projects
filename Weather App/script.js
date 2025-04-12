const input=document.querySelector("input");
const btn=document.getElementById("btn");
const icon=document.querySelector(".icon");
const weather=document.querySelector(".weather");
const temprature=document.querySelector(".temprature");
const description=document.querySelector(".description");


btn.addEventListener("click",()=> {
    let city=input.value;
    getweather(city);
})

function getweather(city) {
   console.log(city);
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'ea7ac060b8c20e208e6ea0b5c0968df6'}`)
   .then(Response=>Response.json())
   .then(data=> {
    console.log(data)
    const iconCode=data.weather[0].icon;
    icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather icon"/>`

    const weatherCity=data.name;
    const weatherCountry=data.sys.country;
    weather.innerHTML=`${weatherCity},${weatherCountry}`;

    const weatherTemp=data.main.temp;
    temprature.innerHTML=`${weatherTemp} F`;

    const weatherDesc=data.weather[0].description;
    description.innerHTML=weatherDesc;
  })
}

