// refs to html
var search = $(`#search`);
var go = $(`#go`);
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
var uv = $(`#currentUV`);
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
var humid5= $(`#humid5`);




function setCityName() {
    h2.text("Denver!");
}


function init() {
    setCityName();
    getWeather();
    getLocation();
    
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
        temp.text(`Current Temperature: ` + Math.floor(response.main.temp) + ` F`);
        humid.text(`Humidity: ` + response.main.humidity);
        wind.text(`Wind Speed: ` + response.wind.speed);
    })
}

function getLocation () {
   
    var location = navigator.geolocation.getCurrentPosition(success, error);
    console.log(location);
    const status = $(`#status`);
    const mapLink = $(`#map-link`);
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude.toFixed(3);
      const longitude = position.coords.longitude.toFixed(3);
      console.log(latitude);
      console.log(longitude);
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function error() {
        status.textContent = 'Unable to retrieve your location';
      }
    
      if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
      } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
      }

}
// ajax callback function to grab 5 day forecast!




// run functions 

init();





// click listeners will call ajax functions with preset values from buttons 
// or grab the value from the text field if the go button is pressed

// and then publish the values to each row and card