//pointers to html
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
var temp = $(`#currentTemp`);
var humid = $(`#currentHumid`);
var wind = $(`#currentWind`);
var uv = $(`#currentUV`);



var h2 = $(`h2`);

setCityName();


function setCityName() {
    h2.text("Denver!");
}





//call init function




// init function search denver weather (add localStorage later if possible)


// ajax callback function to grab current weather

// ajax callback function to grab 5 day forecast!










// click listeners will call ajax functions with preset values from buttons 
// or grab the value from the text field if the go button is pressed

// and then publish the values to each row and card