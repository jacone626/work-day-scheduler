// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  

  //Set item to local storage
var saveBtn = $(".btn")
saveBtn.on("click", function(event) {
  event.preventDefault();

  console.log(this);
  
  var textArea= document.querySelector("#hour-9text").value;
  localStorage.setItem("9am", textArea);
  }
);

// Get item from local storage
var savedText = localStorage.getItem("9am");
var textArea= document.querySelector("#hour-9text")
 
  if (!textArea) 
    return;
  
  textArea.value = savedText


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var currentTime = dayjs().format("hh")
  var string = document.querySelector("#hour-09")
  var newString = string.id.slice(-2)

  if (newString === currentTime) {
    string.classList.add("present")
  }

  else if (newString < currentTime) {
    string.classList.add("past")
  }

  else {
    string.classList.add("future")
  }


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  // TODO: Add code to display the current date in the header of the page.

var todayDate = dayjs().format("dddd, MMMM D")

$("#currentDay").text(todayDate)

});
