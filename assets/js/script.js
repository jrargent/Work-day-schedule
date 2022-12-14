const localStorageKeyName = "tasks";

// adds current day to the header of the page
var currentTime = moment();
var currentDay = currentTime.format('dddd MMM Do YY');
$("#currentDay").text(currentDay);

// shows current time in hour am/pm format
var formattedCurrentTime = currentTime.format("h a");
console.log(formattedCurrentTime);

// array for localStorage object
var saveArray = new Array();

// create array object to collect ids and hour text

var array = [];
var isAfterArray = [];
var isBeforeArray = [];



$(".hour").each(function () {
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

// create var for milliseconds in a minute
var intervalTime = 60000;

setInterval(checkTime(), intervalTime);

function checkTime() {
  currentTime = moment();
  currentDay = currentTime.format('dddd MMM Do YY');
  $("#currentDay").text(currentDay);

  $.each(array, function (i, timeObj) {
    auditTime(timeObj);
  });

  $.each(isAfterArray, function (i, timeId) {
    $("#" + timeId).toggleClass("bg-secondary");
  });

  $.each(isBeforeArray, function (i, timeId) {
    $("#" + timeId).toggleClass("bg-success");
  });
};
// End of time check


$(".description").on("click", function () {
  var text = $(this).text().trim();
  //create a text area
  var textInput = $("<textarea>").val(text);

  $(this).children().replaceWith(textInput);
  textInput.trigger("focus");
});

$(".description").on("blur", "textarea", function () {
  // get the textarea's current value/text
  var text = $(this).val().trim();
  // recreate p element
  var taskP = $("<p>").text(text);
  // replace textarea with p element
  $(this).replaceWith(taskP);

});

// save task
$(".saveBtn").on("click", function () {
  var task = $(this).parents(".row").find(".description")[0]
  console.log(task);
debugger;
  // to avoid pushing duplicates into the array
  if (!Array.isArray(saveArray)) {
    saveArray = [];
  }



  var i = saveArray.length > 0 ? saveArray.findIndex(s => s.id === task.id) : -1
  if (i > -1) {
    saveArray[i].text = task.innerText.trim();
  }



  else {
    saveArray.push({ id: task.id, text: task.innerText.trim() })
  };

  localStorage.setItem(localStorageKeyName, JSON.stringify(saveArray));
  console.log(saveArray)
});


// load task
var loadTasks = function () {
  tasks = JSON.parse(localStorage.getItem(localStorageKeyName));

  $.each(tasks, function (i, taskObj) {
    $("#" + taskObj.id).children()[0].innerText = taskObj.text;

  });
  // repopulates the saveArray because it empties when page reloads
  saveArray = tasks
};


loadTasks();
