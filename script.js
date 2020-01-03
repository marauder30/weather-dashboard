// refs to html
var search = $(`#search`);
var denver = $(`#denver`);
var seattle = $(`#seattle`);
var losangeles = $(`#losangeles`);
var chicago = $(`#chicago`);
var newyork = $(`#newyork`);
var washingtondc = $(`#washingtondc`);
var atlanta = $(`#atlanta`);
var miami = $(`#miami`);
var h2 = $(`h2`);
var icon = h2.appendChild;
var temp = $(`#currentTemp`);
var humid = $(`#currentHumid`);
var wind = $(`#currentWind`);
var uv = $(`#styleUV`);
var card1 = $(`#card1`);
var date1 = $(`#date1`);
var icon1 = $(`#icon1`);
var temp1 = $(`#temp1`);
var humid1= $(`#humid1`);
var card2 = $(`#card2`);
var date2 = $(`#date2`);
var icon2 = $(`#icon2`);
var temp2 = $(`#temp2`);
var humid2= $(`#humid2`);
var card3 = $(`#card3`);
var date3 = $(`#date3`);
var icon3 = $(`#icon3`);
var temp3 = $(`#temp3`);
var humid3= $(`#humid3`);
var card4 = $(`#card4`);
var date4 = $(`#date4`);
var icon4 = $(`#icon4`);
var temp4 = $(`#temp4`);
var humid4= $(`#humid4`);
var card5 = $(`#card5`);
var date5 = $(`#date5`);
var icon5 = $(`#icon5`);
var temp5 = $(`#temp5`);
var humid5 = $(`#humid5`);
var uvidx;
var sidebar = $(`#sidebar`);
var searchLat;
var searchLon;


init();


function setCityName() {
    h2.text("Denver!");
}


function init() {
    // getLocation();
    setCityName();
    getWeather();
    initialUV();
    forecast();
    
    
}


//call init function

// moment.js to grab current date and for forecast cards?


// init function search denver weather (add localStorage later if possible)


// ajax callback function to grab current weather
function getWeather() {
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=b4e24afa7b1b97b59d4ac32e97c8b68d";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
        $(`p`).text("");
        temp.text(`Current Temperature: ` + Math.floor(response.main.temp) + ` °F`);
        humid.text(`Humidity: ` + response.main.humidity + `%`);
        wind.text(`Wind Speed: ` + response.wind.speed);
    })
}


function initialUV() {

    var lat = "39.59";
    var lon = "-104.99"
    
    
    var queryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=b4e24afa7b1b97b59d4ac32e97c8b68d";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
        console.log(response.value);
        
        uvidx = response.value;
        
        uv.text(uvidx);
        
        
        
        
    })
}


// ajax callback function to grab 5 day forecast!

function forecast() {

    var cityName = "Denver";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=b4e24afa7b1b97b59d4ac32e97c8b68d";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        $(`#temp1`).text("Temp: " + Math.ceil(response.list[6].main.temp) + "°F");
        $(`#humid1`).text("Humid: " + response.list[6].main.humidity + "%");
        $(`#temp2`).text("Temp: " + Math.ceil(response.list[14].main.temp) + "°F");
        $(`#humid2`).text("Humid: " + response.list[14].main.humidity + "%");
        $(`#temp3`).text("Temp: " + Math.ceil(response.list[22].main.temp) + "°F");
        $(`#humid3`).text("Humid: " + response.list[22].main.humidity + "%");
        $(`#temp4`).text("Temp: " + Math.ceil(response.list[30].main.temp) + "°F");
        $(`#humid4`).text("Humid: " + response.list[30].main.humidity + "%");
        $(`#temp5`).text("Temp: " + Math.ceil(response.list[38].main.temp) + "°F");
        $(`#humid5`).text("Humid: " + response.list[38].main.humidity + "%");

    })
}



function searchWeather() {
    
    var cityName = $(`#search`)[0].value;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=b4e24afa7b1b97b59d4ac32e97c8b68d";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        h2.text("");
        h2.text(response.name);
        temp.text("");
        temp.text(`Current Temperature: ` + Math.floor(response.main.temp) + ` °F`);
        humid.text("");
        humid.text(`Humidity: ` + response.main.humidity + `%`);
        wind.text("");
        wind.text(`Wind Speed: ` + response.wind.speed);


        searchLat = (response.coord.lat);
        searchLon = (response.coord.lon);


        
        newForecast();
        newUV();
        
    })
}

function newForecast() {
    
    var cityName = $(`#search`)[0].value;
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=b4e24afa7b1b97b59d4ac32e97c8b68d";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
        $(`#temp1`).text("Temp: " + Math.ceil(response.list[6].main.temp) + "°F");
        $(`#humid1`).text("Humid: " + response.list[6].main.humidity + "%");
        $(`#temp2`).text("Temp: " + Math.ceil(response.list[14].main.temp) + "°F");
        $(`#humid2`).text("Humid: " + response.list[14].main.humidity + "%");
        $(`#temp3`).text("Temp: " + Math.ceil(response.list[22].main.temp) + "°F");
        $(`#humid3`).text("Humid: " + response.list[22].main.humidity + "%");
        $(`#temp4`).text("Temp: " + Math.ceil(response.list[30].main.temp) + "°F");
        $(`#humid4`).text("Humid: " + response.list[30].main.humidity + "%");
        $(`#temp5`).text("Temp: " + Math.ceil(response.list[38].main.temp) + "°F");
        $(`#humid5`).text("Humid: " + response.list[38].main.humidity + "%");
        
        
        
    })
    
}

function newUV() {

    var queryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + searchLat + "&lon=" + searchLon + "&appid=b4e24afa7b1b97b59d4ac32e97c8b68d";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {


        uvidx = response.value;
        
        uv.text(uvidx);

    })

}


// run functions 

document.addEventListener("click", function(event) {

    var element = event.target;

    if (element.matches("#go") === true) {
        console.log("success!");
        
        var searchCity = $(`#search`)[0].value;
        // console.log($(`#search`)[0].value);
        console.log(searchCity);

        searchWeather();
        
    }


})




// click listeners will call ajax functions with preset values from buttons 
// or grab the value from the text field if the go button is pressed










    // function getLocation () {
        
    //     const status = $(`#status`);
    //     const mapLink = $(`#map-link`);
        
    //     mapLink.href = '';
    //     mapLink.textContent = '';
        
    //     function success(position) {
    //         var location = navigator.geolocation.getCurrentPosition(success, error);
    //         var latitude  = position.coords.latitude.toFixed(2);
    //         var longitude = position.coords.longitude.toFixed(2);
            
    //         status.textContent = '';
    //         mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    //         mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
            
    //         lat = latitude;
    //         lon = longitude;
    //         console.log(lat);
    //         console.log(lon);
    //         uvIndex();
    //     }
        
    //     function error() {
    //         status.textContent = 'Unable to retrieve your location';
    //     }
        
    //     if (!navigator.geolocation) {
    //         status.textContent = 'Geolocation is not supported by your browser';
    //     } else {
    //         status.textContent = 'Locating…';
    //         navigator.geolocation.getCurrentPosition(success, error);
    //     }
        
        
        
    // }