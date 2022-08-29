// adds current day to the header of the page
var currentDay = moment().format('dddd MMM Do YY');
$("#currentDay").text(currentDay);

// shows current time in hour am/pm format
var currentTime = moment().format("h a");
console.log(currentTime);

