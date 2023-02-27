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

  console.log(this.classList[4]);
  var textID = this.classList[4]
  
  var localTextArea= document.getElementById(textID).value;
  console.log(localTextArea)
  localStorage.setItem(textID, localTextArea);
  }
);

// Get item from local storage

var nineTextArea = document.getElementById("hour-9text")
// var tenTextArea = document.getElementById("hour-10text")
// var elevenTextArea = document.getElementById("hour-11text")

// console.log(nineTextArea)

var textArray = [
  nineTextArea, 
  // tenTextArea,
  // elevenTextArea,
]

textArray.forEach (pageLoad)

function pageLoad (event) {

  console.log(event.id)

// var savedText = localStorage.getItem("9am");
// var textArea= document.querySelector("#hour-9text")
 
// textArea.value = savedText

var savedText = localStorage.getItem(event.id)
textArray[0].value = savedText

}


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var currentTime = dayjs().format("HH")
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

  // TODO: Add code to display the current date in the header of the page.

var todayDate = dayjs().format("dddd, MMMM D")

$("#currentDay").text(todayDate)

});
