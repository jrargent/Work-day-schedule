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


$(".description").on("click", "p", function() {
  var text = $(this).text().trim();
  //create a text area
  var textInput = $("<textarea>").val(text);

  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});

$(".description").on("blur", "textarea", function() {
   // get the textarea's current value/text
    var text = $(this).val().trim();
    // recreate p element
    var taskP = $("<p>").text(text);
    // replace textarea with p element
    $(this).replaceWith(taskP);

});



/*
Notes for button to save to localStorage







*/