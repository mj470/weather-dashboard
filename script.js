const MY_API_KEY = "469396e3cafea8b479bcaf2eae875bae"
var forecast = document.getElementById("5-day-forecast");
// "${https://home.openweathermap.org/}/geo/1.0/direct?q=${search}&limit=5&appid=${469396e3cafea8b479bcaf2eae875bae}"
var containercitySearchInput = document.querySelector("#citySearchInput");
var btn = document.querySelector("citySearchButton");
var btn = document.querySelector("cityNameButton");
var containerdisplayCity = document.querySelector("#displayCity");
var containerCityName = document.querySelector("#CityName");
var containerlocalTemp = document.querySelector("#localTemp");
var containerlocalWind = document.querySelector("#localWind");
var containerlocalHumidity = document.querySelector("#localHumidity");
var contaiersearchHx = document.querySelector("#searchHxContainer");
var containerdayCard = document.querySelector("#dayCard");

// Storage //
var localStorage = JSON.parse(localStorage.getItem('cities')) || [];

function searchedCities() {
    var previousSearches = JSON.parse(localStorage.getItem('CityName'));
    if(previousSearches) {
        containerCityName = previousSearches;
    }
    return;
}

// Searched cities display 

function dsiplaySearchedCities()

// Accessing weather update //




 function fetchWeather(){
    var cityName = document.getElementById("citySearchInput").ariaValueMax;
   
    
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityName.valueOf+'&limit=5&units=imperial&APPID=469396e3cafea8b479bcaf2eae875bae'
     ).then(function(response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        for (var i = o; i < 5; i++) {
            var containerdisplayCity =document.createElement("div");
            var header =document.createElement("h2");
            var temp = document.createElement("p");

            header.textContent = "Day " + i;
            temp.textContent = data.list[i].main.temp;
            console.log(data.list[i].main.temp);

            dayContainer.setAttribute(
                "style",
                "background-color: light blue; margin: 10px"
            );

            forecast.append(containerdisplayCity);
            containerdisplayCity.append(header);
            containerdisplayCity.append(temp);
        }

    });
}

// Current day weather

var currentDate = new Date(response.data.dt * 1000);
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
containerCityName.innerHTML=response.data.name + " (" + month + "/" + day + "/" + year + ") ";
containerlocalTemp.innerHTML= k2f(response.data.main.temp);
containerlocalHumidity.innerHTML = response.data.humdity + "%";
containerlocalWind.innerHTML = response.data.wind.speed + "mph";




var d =new Date();
var weekday =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function CheckDay(day){
    if(day +d.getDay() > 6){
        return day +d.getDay()-7;
    }
    else {
        return day +d.getDay();
    }
}












document.querySelector("button").addEventListener("click" , fetchWeather);

$('button').click()