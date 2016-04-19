//Augmenting our application - The ISS is getting closer

function getForecast() {
//Adding addition modules
  var colors = require('colors');

//Get user location
    var prompt = require('prompt');
    
    prompt.start();
    
    prompt.get(["location"], function (err, result) {
    console.log('You location is:'.rainbow + result.location);

//Get lat/long 
  var request = require('request');
    var address = "https://maps.googleapis.com/maps/api/geocode/json?address=" + result.location;
    request(address, function(err, result) {
        var resultObject = JSON.parse(result.body);
        var userLong = resultObject.results[0].geometry.location.lat;
        var userLat = resultObject.results[0].geometry.location.lng;
    
//Get the weather at this location
    var request = require('request');
    var address = "https://api.forecast.io/forecast/0ff555cdd86e7924d2e512619eb0f53a/" + userLat + "," + userLong;
    request(address, function(err, result) {
        var resultObject = JSON.parse(result.body);
        var currentWeather = resultObject.currently.summary;
        var comingWeather = resultObject.daily.summary;
    console.log("The current weather is ".yellow + currentWeather.toLowerCase().yellow);
    console.log("But it is ".red + comingWeather.toLowerCase().red);
//Closing everything
    }); });   });
}

//call the function
getForecast();