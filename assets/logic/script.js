// Main function
$(document).ready(function () {

  // Add current time dayjs format--> day, month day, year
  var currentTime = moment().format("dddd, MMMM Do, YYYY");
  $("#currentDay").text(currentTime);

  // -----------Time block Setup start ---------
  
  $(function timeBlockSetup() {
    var mainContainer = $("#container");


    //  Created the variable for the time - val = military time
    var timeDataBlocks = [
      { time: "9 AM", val: 09, id: "hour9amText"},
      { time: "10 AM", val: 10, id: "hour10amText"},
      { time: "11 AM", val: 11, id: "hour11amText"},
      { time: "12 AM", val: 12, id: "hour12amText"},
      { time: "1 PM", val: 13, id: "hour1pmText"},
      { time: "2 PM", val: 14, id: "hour2pmText"},
      { time: "3 PM", val: 15, id: "hour3pmText"},
      { time: "4 PM", val: 16, id: "hour4pmText"},
      { time: "5 PM", val: 17, id: "hour5pmText"}

    ];
    // variable for current hour 
    var currentHour = 12//parseInt(moment().format("H"));
    console.log(currentHour);

    //  for Loop for the array
    for (let i = 0; i < timeDataBlocks.length; i++) {

      // variables 
      var taskBlock = $("<div>");
      var hourBlock = $("<div>");
      var textBlock = $("<textarea>");
      var saveBtn = $("<button>");
      var iSave = $("<i>");
    

      // add class to variables created
      taskBlock.addClass("row time-block");
      hourBlock.addClass("col-2 col-md-1 hour text-center py-3");
      saveBtn.addClass("btn saveBtn col-2 col-md-1");
      textBlock.addClass("col-8 col-md-10 description");
      textBlock.attr("id", timeDataBlocks[i].id);
      iSave.addClass("fas fa-save");

      // adding attribute to our task block
      taskBlock.attr("hour", timeDataBlocks[i].val);

      //Adding text to each time block
      hourBlock.text(`${timeDataBlocks[i].time}`);

     // append variables to the main container 
      mainContainer.append(taskBlock);
      taskBlock.append(hourBlock);
      taskBlock.append(textBlock);
      taskBlock.append(saveBtn);
      saveBtn.append(iSave);

}
// Function to change color by hour past, present, future
function setClass() {
  var colorBlock = $(".time-block");
  for (let i = 0; i < colorBlock.length; i++) {
    var currentDiv = $(colorBlock[i]);
    if (currentDiv.attr("hour") > currentHour) {
      currentDiv.addClass("future");
     } else if (currentDiv.attr("hour") < currentHour) {
      currentDiv.addClass("past");
    } else {
      currentDiv.addClass("present");
    }
  }
}
setClass();

// Loop to pull local storage data and populate the text fields 
$('.description').each(function(){
  //if statement here 
  // use $(this) to reference the current div in the loop
  var text_id = $(this).attr('id');
  //console.log(text_id);
  text_id = JSON.parse(localStorage.getItem(text_id, valueOf));
  $(this).text(text_id);
  
});

}); 
// -----------Time block Setup end----------



$(function saveData() {
  var saveBtn = $(".saveBtn");

saveBtn.on("click", handleSave);

function handleSave(event){
  event.preventDefault();
    console.log("save clicked");
//		var parent_id = $(this).parent().attr('id');
//			console.log(parent_id);
  var textInput = $(this).siblings('textarea').val();
  var textAreaId = $(this).siblings('textarea').attr('id');
    console.log(textInput);
  localStorage.setItem(textAreaId, JSON.stringify(textInput));
  }
});

});

  