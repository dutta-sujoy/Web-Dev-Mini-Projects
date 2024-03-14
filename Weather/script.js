const ApiKey = "0586687b966b025e6f9743a3407507fa";
const ApiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
searchBox.value = "kolkata";
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function CheckWeather(city){
    const response = await fetch(ApiURL + city + `&appid=${ApiKey}`);

    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "img/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "img/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "img/snow.png"
    }
    
}
CheckWeather(searchBox.value);
searchBtn.addEventListener("click" , ()=>{
    CheckWeather(searchBox.value);
})
searchBox.addEventListener("keydown" , (event)=>{
    if (event.key === 'Enter'){
    CheckWeather(searchBox.value);
    }
})

// CheckWeather(); 