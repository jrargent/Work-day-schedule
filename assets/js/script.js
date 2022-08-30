// adds current day to the header of the page
var currentTime = moment();
var currentDay = currentTime.format('dddd MMM Do YY');
$("#currentDay").text(currentDay);

// shows current time in hour am/pm format
var formattedCurrentTime = currentTime.format("h a");
console.log(formattedCurrentTime);

// create array object to collect ids and hour text

var array = [];
var isAfterArray = [];
var isBeforeArray = [];

$(".hour").each(function() {
  array.push({
    id: this.id,
    text: this.innerText.trim()
  });
});
console.log(array); //this is our timeObject


function auditTime(timeObject) {
  var timeMoment = moment(timeObject.text, "h a"); //object that got passed in and is turned into a Moment

  if (currentTime.isAfter(timeMoment, "hour")) {
    isAfterArray.push(timeObject.id);
  }
  else if (currentTime.isBefore(timeMoment, "hour")) {
    isBeforeArray.push(timeObject.id);
  }
  else {
    $("#" + timeObject.id).toggleClass("bg-danger");
  }
};

// all of the below will get set inside a setInterval triggered function to run once an hour (beginning of the hour)
   // these should be run during the interval so that they update when function is run. Otherwise only time/day at time of page load will be recorded in var
currentTime = moment();
currentDay = currentTime.format('dddd MMM Do YY');
$("#currentDay").text(currentDay);

$.each(array, function(i, timeObj){
  auditTime(timeObj);
});

$.each(isAfterArray, function(i, timeId){
  $("#" + timeId).toggleClass("bg-secondary");
});

$.each(isBeforeArray, function(i, timeId){
  $("#" + timeId).toggleClass("bg-success");
});



// End of time check








/*
Option 1:
var hourIdCounter = 1
var hourId "#hour-" + hourIdCounter; (At end of function pass, IdCounter increments by 1)

            Option 2 (and likely best option):
                or could make array object of hour- ids and make a for loop for the length of array. Beginning of the hour, function calls to 
                compare currentTime with text of elements with listed Ids


   create array object: 
                

Need to take the id of the paragraph, pull the text and compare to the text/value of currentTime 
    function auditTime() {
       var listedTime = $(".hour").text();
            
    }

// remove any old classes from element
  $( row div ).removeClass("bg-secondary bg-success bg-danger");

   // apply new class below:

if currentTime is after the listed time (ex. currentTime = 12pm, listedTime = 8am)
    then add bootstrap .bg-secondary to row div (the parent div of the div with the <p> with hasClass(".row"))
            if (moment().isAfter(listedTime)) {
                $( row div ).addClass("bg-secondary");


if currentTime is before the listed time (ex. currentTime = 12pm, listedTime = 3pm )
    then add bootstrap .bg-success to row div (the parent div of the div with the <p> with hasClass(".row"))
            if (currentTime !== listedTime - 1   ---Need to turn listedTime into a Moment object and then compare

            if (moment().isBefore(listedTime) ) {
                $( row div ).addClass("bg-success");
            }
  if (currentTime == listedTime) {
    $( row div ).addClass("bg-danger");
  }          

Then need to have a way to run again. Run every hour to update the backgrounds. Run function at beginning of every hour.
     At beginning of function, reset hourIdCounter to 1. 

*/
