// adds current day to the header of the page
var currentDay = moment().format('dddd MMM Do YY');
$("#currentDay").text(currentDay);

// shows current time in hour am/pm format
var currentTime = moment().format("h a");
console.log(currentTime);

var listTime = [$(".hour p").text()];
console.log(listTime);



/*
Option 1:
var hourIdCounter = 1
var hourId "#hour-" + hourIdCounter; (At end of function pass, IdCounter increments by 1)
            Option 2 (and likely best option):
                or could make array of hour- ids and make a for loop for the length of array. Beginning of the hour, function calls to 
                compare currentTime with text of elements with listed Ids

Need to take the id of the paragraph, pull the text and compare to the text/value of currentTime 
    function auditTime() {
       var listedTime = $("#hour-x").text();
            
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
