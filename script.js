var todayDate = moment("09/8/2022", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(todayDate);

$(document).ready (function (){
  $('.saveBtn').on ('click', function(){
    var text = $(this).siblings('.note').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, text);
  })

  function timeTracker () {
    var currentTime = moment().hour(); 
    $('.time-block').each (function (){

      var timeBlock = parseInt($(this).attr('id').split('hour')[1]);

      if (timeBlock < currentTime) {
        $(this).removeClass ('future'); 
        $(this).removeClass ('present');
        $(this).addClass ('past');
      } else if (timeBlock === currentTime) {
        $(this).removeClass ('future');
        $(this).removeClass ('present');
        $(this).addClass ('past');
      } else {
        $(this).removeClass ('future');
        $(this).removeClass ('present');
        $(this).addClass ('past');

      }
    })
  }

  timeTracker
})
