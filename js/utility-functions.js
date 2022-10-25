/* -------------------------------------------------------
   Function for printing weather-specific class on body
   
   This function will add a class to your <body> tag;
   These class names need to exist in your CSS file
   in order to display on your page

   Usage – Add the following code inside your drawWeather function
   and change d.current.weather[0].description to reflect the day you
   would like to display information for (i.e. 0 for today, etc.)

   changeTheme(d.current.weather[0].description);

   ------------------------------------------------------- */

function changeTheme(d){
  // if the description includes the word "rain"
  if( d.indexOf('rain') > 0 ) {
    $('body').addClass('rainy');
  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') > 0 ) {
    $('body').addClass('cloudy');
  // if the description includes the word "sunny"
  } else if( d.indexOf('sunny') > 0 ) {
    $('body').addClass('sunny');
  // if none of those cases are true, assume it's clear
  } else {
    $('body').addClass('clear');
  }
}

/* -----------------------------------------------
   Function for printing weather-specific graphic
   
   This function will print an <img> tag and the needed
   icon file to match the weather conditions

   Usage – Add the following code inside your drawWeather function
   and change $('.weather') to a selector specific to your layout
   and change d.current.weather[0].description to reflect the day you
   would like to display an icon for (i.e. 0 for today, etc.)

   $('.weather').html(printGraphic(d.current.weather[0].description));

   ----------------------------------------------- */

function printCurrent(d){
  // if the description includes the word "rain"
  if( d.indexOf('rain') > 1 ) {
    return '<h3>Raining</h3>';
  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') > 1) {
    return '<h3>Cloudy</h3>';
  // if the description includes the word "sunny"
  } else if( d.indexOf('sunny') > 1 ) {
    return '<h3>Sunny</h3>';
  // if none of those cases are true, assume it's clear
  } else {
    return '<h3>Clear Skies</h3>';
  }
}
function printCurrent2(d){
  // if the description includes the word "rain"
  if( d.indexOf('rain') > 1 ) {
    return '<img src="img/cloud-rain2.png" alt="Rain icon">';
  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') > 1) {
    return '<img src="img/cloud2.png" alt="Cloud icon">';
  // if the description includes the word "sunny"
  } else if( d.indexOf('sunny') > 1 ) {
    return '<img src="img/cloud-sun2.png" alt="Sunny icon">';
  // if none of those cases are true, assume it's clear
  } else {
    return '<img src="img/sun2.png" alt="Sun icon">';
  }
}

function printCurrent3(d){
  // if the description includes the word "rain"
  if( d.indexOf('rain') >= 0 ) {
    return '<img src="img/cloud-rain.png" alt="Rain icon">';
  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') >= 0) {
    return '<img src="img/cloud.png" alt="Cloud icon">';
  // if the description includes the word "sunny"
  } else if( d.indexOf('sunny') >= 0 ) {
    return '<img src="img/cloud-sun.png" alt="Sunny icon">';
  // if none of those cases are true, assume it's clear
  } else {
    return '<img src="img/sun-solid.png" alt="Sun icon">';
  }
}

function printHigh(d){
  // if the description includes the word "rain"
  if( d.indexOf('rain') > 1) {
    return '<img src="img/cloud-rain2.png" alt="Cloud icon">';
  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') > 1) {
    return '<img src="img/cloud2.png" alt="Cloud icon">';
  // if the description includes the word "sunny"
  } else if( d.indexOf('sunny') > 1) {
    return '<img src="img/cloud-sun2.png" alt="Cloud icon">';
  // if none of those cases are true, assume it's clear
  } else {
    return '<img src="img/sun2.png" alt="Cloud icon">';
  }
}

function printLow(d){
  // if the description includes the word "rain"
  if( d.indexOf('rain') > 1) {
    return '<img src="img/cloud-rain2.png" alt="Cloud icon">';
  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') > 1) {
    return '<img src="img/cloud2.png" alt="Cloud icon">';
  // if the description includes the word "sunny"
  } else if( d.indexOf('sunny') > 1) {
    return '<img src="img/cloud-sun2.png" alt="Cloud icon">';
  // if none of those cases are true, assume it's clear
  } else {
    return '<img src="img/sun2.png" alt="Cloud icon">';
  }
}

/* -----------------------------------------------
   Function for printing Summary
   
   This function will print an <img> tag and the needed
   icon file to match the weather conditions

   Usage – Add the following code inside your drawWeather function
   and change $('.weather') to a selector specific to your layout
   and change d.current.weather[0].description to reflect the day you
   would like to display an icon for (i.e. 0 for today, etc.)

   $('.weather').html(printGraphic(d.current.weather[0].description));

   ----------------------------------------------- */

function printSummary(d){
  // if the description includes the word "rain"
  if( d.indexOf('rain') > 1 ) {
    return '<p>Make sure you grab a umberlla or a rain jacket on your way out the door, because it is definatly raining.</p>';
  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') > 1 ) {
    return '<p>There is no sun shining in the sky today, replaced by clouds with a slight chance of rain.</p>';
  // if the description includes the word "sunny"
  } else if( d.indexOf('sunny') > 0 ) {
    return '<p>Sunny, but slightly cloudy, finish all your homework, so you can play outside</p>';
  // if none of those cases are true, assume it's clear
  } else {
    return '<p>Very sunny today, do not leave anythig meltable in or near the sun (like chocolate!)</p>';
  }
}
/* -----------------------------------------------
   Function for printing windyness, rain, and clouds
   
   This function will print an <img> tag and the needed
   icon file to match the weather conditions

   Usage – Add the following code inside your drawWeather function
   and change $('.weather') to a selector specific to your layout
   and change d.current.weather[0].description to reflect the day you
   would like to display an icon for (i.e. 0 for today, etc.)

   $('.weather').html(printGraphic(d.current.weather[0].description));

   ----------------------------------------------- */

function printWind(d){
  // if the description includes the word "rain"
  if( d > 20 ) {
    return '<img src="img/wind.png" alt="Wind icon"><p>Windy</p>';
  } else if( d > 10) {
    return '<img src="img/wind.png" alt="Wind icon"><p>Slight Breeze</p>';
  } else {
    return '<img src="img/sun-solid.png" alt="Sun icon"><p>Not Windy</p>';
  }
}

function printPop(t){
  // if the description includes the word "rain"
  var pop = convertPop(t);
  if( pop > 75 ) {
    return '<img src="img/cloud-showers-heavy.png" alt="Raining"><p>Heavy Rain</p>';
  } else if( pop > 40 ) {
    return '<img src="img/cloud-sun-rain.png" alt="Cloud Icon"><p>Possible Showers</p>';
  } else {
    return '<img src="img/sun-solid.png" alt="Sun Icon"><p>Not Rainy</p>';
  }
}

function printClouds(d){
  // if the description includes the word "rain"
  if( d > 60 ) {
    return '<img src="img/cloud.png" alt="Cloud Icon"><p>Cloudy</p>';
  } else if( d > 20 ) {
    return '<img src="img/cloud-sun.png" alt="Cloud Icon"><p>Slightly Cloudy</p>';
  } else {
    return '<img src="img/sun-solid.png" alt="Sun Icon"><p>Not Cloudy</p>';
  }
}
/* -----------------------------------------------
   Function for printing weather-specific graphic
   
   This function will print an <img> tag and the needed
   icon file to match the weather conditions

   Usage – Add the following code inside your drawWeather function
   and change $('.weather') to a selector specific to your layout
   and change d.current.weather[0].description to reflect the day you
   would like to display an icon for (i.e. 0 for today, etc.)

   $('.weather').html(printGraphic(d.current.weather[0].description));

   ----------------------------------------------- */

function printGraphic(d){
  // if the description includes the word "rain"
  if( d.indexOf('rain') > 0 ) {
    return '<img src="img/svg/Cloud-Rain.svg" alt="Cloud icon"><h3>Raining</h3>';
  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') > 0) {
    return '<img src="img/svg/Cloud.svg" alt="Cloud icon"><h3>Cloudy</h3>';
  // if the description includes the word "sunny"
  } else if( d.indexOf('sunny') > 0 ) {
    return '<img src="img/svg/Sun.svg" alt="Cloud icon"><h3>Sunny</h3>';
  // if none of those cases are true, assume it's clear
  } else {
    return '<img src="img/svg/Sun.svg" alt="Cloud icon"><h3>Clear Skies</h3>';
  }
}

/* -----------------------------------------------
   Function for converting time to hours/minutes
   DO NOT EDIT

   This function will return properly formatted time information
   to be inserted into an element on the page

   Usage – Add the following code inside your drawWeather function
   and change $('.weather') to a selector specific to your layout
   and change d.current.dt to reference the time information you 
   are looking to convert (i.e. d.current.dt returns the current
   time, d.current.sunrise returns the time of today's sunrise, etc.)

   $('.weather').html(convertTime(d.current.dt));

   ----------------------------------------------- */

function convertTime(t){

  var unixTimestamp = t;
  // since javascript works in milliseconds, you should convert 
  // the time into milliseconds by multiplying it by 1000.
  var date = new Date(unixTimestamp * 1000);
  // hours part from the timestamp (extra code needed to convert from military)
  var hours = (date.getHours() + 24) % 12 || 12;;
  // minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // seconds part from the timestamp
  var seconds = "0" + date.getSeconds();
  // will display time in 11:10 format
  var formatTime = hours + ':' + minutes.substr(-2);
  // send formatted date back
  return formatTime;

}

/* -----------------------------------------------
   Function for converting temp to a whole number
   DO NOT EDIT

   This function will return properly formatted temperature
   information to be inserted into an element on the page

   Usage – Add the following code inside your drawWeather function
   and change $('.weather') to a selector specific to your layout
   and change d.current.temp to reference the temperature information
   you are looking to convert (i.e. d.current.temp returns the current
   temperature, d.daily[1].temp.max returns the high temperature
   for tomorrow, etc.)

   $('.weather').html(convertTemp(d.current.temp));

   ----------------------------------------------- */

function convertTemp(t){

  return Math.round(t);

}

/* -----------------------------------------------
   Function for creating day of the week
   EDIT FORMAT OF DAY NAMES ONLY ("Monday" to "Mon" or "M", etc)

   This function will return the name of a day of the week
   based on a number supplied. In this system, the number supplied
   is the number of days from the present day. So, 0 is today,
   1 is tomorrow, 2 is two days from today, etc.

   Usage – Add the following code inside your drawWeather function
   and change $('.weather') to a selector specific to your layout
   and change displayDay(1) to reference the name of the day you
   would like to display (i.e. 0 for today, 1 for tomorrow, etc.)

   $('.weather').html(displayDay(1));

   ----------------------------------------------- */

function displayDay(n){

  var d = new Date();
  var weekday = new Array();

  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var dispDay = d.getDay() + n;

  // adjust number system for numbers over 6
  // subtract 7 from totals higher than 6
  // to keep the day numbers in the array range above
  if(dispDay > 6){
    dispDay = dispDay - 7;
  }

  return weekday[ dispDay ];

}

/* -----------------------------------------------
   Function for converting probability of preciptation

   This function will return a percentage value representing
   the chance of precipitation.

   Usage – Add the following code inside your drawWeather function
   and change $('.weather') to a selector specific to your layout
   and change convertPop(d.daily[0].pop) to reference the day you
   would like to display (i.e. 0 for today, 1 for tomorrow, etc.)

   $('.weather').html(convertPop(d.daily[0].pop));

   ----------------------------------------------- */

function convertPop(t){

  return t * 100;

}

/* -----------------------------------------------
   Function for converting miles/hour to a whole number

   This function will return a number representing 
   a miles per hour value.

   Usage – Add the following code inside your drawWeather function
   and change $('.weather') to a selector specific to your layout
   and change convertToMph(d.daily[0].wind_speed) to reference the day you
   would like to display (i.e. 0 for today, 1 for tomorrow, etc.)

   $('.weather').html(convertToMph(d.daily[0].wind_speed));

   ----------------------------------------------- */

function convertToMph(t){

  return Math.round(t);

}

/* -----------------------------------------------
   Function for printing moon-phase-specific graphic
   See https://openweathermap.org/api/one-call-api for details

   This function will print an <img> tag and the needed
   icon file to match the moon information

   Usage – Add the following code inside your drawWeather function
   and change $('.weather') to a selector specific to your layout
   and change d.daily[0].moon_phase to reflect the day you
   would like to display an icon for (i.e. 0 for today, etc.)

   $('.weather').html(printMoonGraphic(d.daily[0].moon_phase));

   ----------------------------------------------- */

function printMoonGraphic(d){
  
  // .5 is a full moon
  if( d == .5 ) {
    return '<img src="img/svg/Moon-Full.svg" alt="Moon icon">';
  
  // .25 is a new moon
  } else if( d == .25 ) {
    return '<img src="img/svg/Moon-New.svg" alt="Moon icon">';
  
  // .75 is a last quarter moon
  } else if( d == .75 ) {
    return '<img src="img/svg/Moon-Last-Quarter.svg" alt="Moon icon">';

  // less than .25 is a waxing crescent moon
  } else if( d < .25 ) {
    return '<img src="img/svg/Moon-Waxing-Crescent.svg" alt="Moon icon">';

  // greater than .25 but less than .5 is a waxing gibbous moon
  } else if( d > .25 || d < .5 ) {
    return '<img src="img/svg/Moon-Waxing-Gibbous.svg" alt="Moon icon">';

  // greater than .5 but less than .75 is a waning gibbous moon
  } else if( d > .5 || d < .75 ) {
    return '<img src="img/svg/Moon-Waning-Gibbous.svg" alt="Moon icon">';

  // greater than .75 but less than 1 is a waning crescent moon
  } else if( d > .75 || d < 1 ) {
    return '<img src="img/svg/Moon-Waning-Crescent.svg" alt="Moon icon">';
  
  }

}