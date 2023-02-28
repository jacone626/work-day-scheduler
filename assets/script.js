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

//Used an each function and "this" to go through each "id" and compare it to the current time.

var currentTime = dayjs().format("HH")
var string = $(".time-block")

string.each(function () {
    var newString= $(this).attr("id").split("-")[1];

    if (newString == currentTime) {
      $(this).addClass("present")
    }
  
    else if (newString < currentTime) {
      $(this).addClass("past")
    }
  
    else {
      $(this).addClass("future")
    }

  });

// Shows current date on top of page

var todayDate = dayjs().format("dddd, MMMM Do")

$("#currentDay").text(todayDate)

});
