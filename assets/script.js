// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {

//Set item to local storage
var saveBtn = $(".btn")

saveBtn.on("click", function(event) {
  event.preventDefault();

  var textID = this.classList[4]
  
  var localTextArea= document.getElementById(textID).value;
  localStorage.setItem(textID, localTextArea);
  }
);

// Get item from local storage

$('#hour-9text').val(localStorage.getItem('hour-9text'));
$('#hour-10text').val(localStorage.getItem('hour-10text'));
$('#hour-11text').val(localStorage.getItem('hour-11text'));
$('#hour-12text').val(localStorage.getItem('hour-12text'));
$('#hour-13text').val(localStorage.getItem('hour-13text'));
$('#hour-14text').val(localStorage.getItem('hour-14text'));
$('#hour-15text').val(localStorage.getItem('hour-15text'));
$('#hour-16text').val(localStorage.getItem('hour-16text'));
$('#hour-17text').val(localStorage.getItem('hour-17text'));


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var currentTime = dayjs().format("HH")
  
  
  var string = $(".time-block")

  console.log(string)

  string.each((string) => {
    var newString = string.id.slice(-2)

    console.log(newString)

    console.log(currentTime)

  });


  // if (newString === currentTime) {
  //   string.classList.add("present")
  // }

  // else if (newString < currentTime) {
  //   string.classList.add("past")
  // }

  // else {
  //   string.classList.add("future")
  // }

  // TODO: Add code to display the current date in the header of the page.

var todayDate = dayjs().format("dddd, MMMM D")

$("#currentDay").text(todayDate)

});
