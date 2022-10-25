/* -------------------------------------------------------
   Function for getting weather information
   ------------------------------------------------------- */

function weatherBalloon() {
  var key = 'e35ca5623af73c61e78b08a4d03a4462';
  var lat = '41.742325';
  var lon = '-71.742332';
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}

$('.button').click(function(){
  $('.cover').addClass('open');
})



/* -------------------------------------------------------
   Function for display weather information
   ------------------------------------------------------- */

function drawWeather( d ) {

  // placeholder div for testing output
  //changeIcons(d.current.weather[0].description); 

  $('.top .day').html(displayDay(0));
  //$('.info ul li:nth-child(3)').html(convertTime(d.current.sunrise));

  $('.current .description').html(printCurrent(d.current.weather[0].description));
  $('.current .icon').html(printCurrent2(d.current.weather[0].description));
  $('.current .temp').html(convertTemp(d.current.temp));

  $('.current .summary').html(printSummary(d.current.weather[0].description));

  $('.extra ul li:nth-child(1)').html(printPop(d.daily[0].pop));
  $('.extra ul li:nth-child(2)').html(printClouds(d.daily[0].clouds));
  $('.extra ul li:nth-child(3)').html(printWind(d.daily[0].wind_speed));

  $('.highlow .start .icon').html(printHigh(d.current.weather[0].description));
  $('.highlow .start .temp').html(convertTemp(d.daily[0].temp.min));
  $('.highlow .end .icon').html(printLow(d.current.weather[0].description));
  $('.highlow .end .temp').html(convertTemp(d.daily[0].temp.max));

  /* For 6 day forecast */

  $('.week ul .dayone h4').html(displayDay(1));
  $('.week ul .daytwo h4').html(displayDay(2));
  $('.week ul .daythree h4').html(displayDay(3));
  $('.week ul .dayfour h4').html(displayDay(4));
  $('.week ul .dayfive h4').html(displayDay(5));
  $('.week ul .daysix h4').html(displayDay(6));
  
  $('.week ul .dayone .icon').html(printCurrent3(d.daily[1].weather[0].description));
  $('.week ul .daytwo .icon').html(printCurrent3(d.daily[2].weather[0].description));
  $('.week ul .daythree .icon').html(printCurrent3(d.daily[3].weather[0].description));
  $('.week ul .dayfour .icon').html(printCurrent3(d.daily[4].weather[0].description));
  $('.week ul .dayfive .icon').html(printCurrent3(d.daily[5].weather[0].description));
  $('.week ul .daysix .icon').html(printCurrent3(d.daily[6].weather[0].description));

  $('.week ul .dayone .high').html(convertTemp(d.daily[1].temp.max));
  $('.week ul .daytwo .high').html(convertTemp(d.daily[2].temp.max));
  $('.week ul .daythree .high').html(convertTemp(d.daily[3].temp.max));
  $('.week ul .dayfour .high').html(convertTemp(d.daily[4].temp.max));
  $('.week ul .dayfive .high').html(convertTemp(d.daily[5].temp.max));
  $('.week ul .daysix .high').html(convertTemp(d.daily[6].temp.max));

  $('.week ul .dayone .low').html(convertTemp(d.daily[1].temp.min));
  $('.week ul .daytwo .low').html(convertTemp(d.daily[2].temp.min));
  $('.week ul .daythree .low').html(convertTemp(d.daily[3].temp.min));
  $('.week ul .dayfour .low').html(convertTemp(d.daily[4].temp.min));
  $('.week ul .dayfive .low').html(convertTemp(d.daily[5].temp.min));
  $('.week ul .daysix .low').html(convertTemp(d.daily[6].temp.min));
}


/* --------------------------------------------------
   Event to get weather information when page loads
   -------------------------------------------------- */

window.onload = function() {
  weatherBalloon();
}
