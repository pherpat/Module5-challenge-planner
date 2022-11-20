// main function
$(document).ready(function () {

  // Add current time dayjs format--> day, month day, year
  var currentTime = moment().format("dddd, MMMM Do, YYYY");
  $("#currentDay").text(currentTime);

  // -----------Time block Setup start ---------
  
  $(function timeBlockSetup() {
    var mainContainer = $("#container");


    //  Created the variable for the time - val = military time
    var timeDataBlocks = [
      { time: "9AM", val: 09 },
      { time: "10AM", val: 10 },
      { time: "11AM", val: 11 },
      { time: "12AM", val: 12 },
      { time: "1PM", val: 13 },
      { time: "2PM", val: 14 },
      { time: "3PM", val: 15 },
      { time: "4PM", val: 16 },
      { time: "5PM", val: 17 }

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

}); 
// -----------Time block Setup end----------



});

  