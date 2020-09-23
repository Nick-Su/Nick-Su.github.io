$(document).ready(function(){
  $("#answer-1").hide();
  $("#answer-2").hide();
  $("#answer-3").hide();
  $("#answer-4").hide();
  $("#answer-5").hide();
  $("#answer-6").hide();

  // 1
  $("#question-1").click(function(){
    $("#answer-1").slideToggle("slow");
  	$("#question-1").toggleClass('border-change');
  	$("#question-1").toggleClass('background-change');
  });

  // 2
  $("#question-2").click(function(){
    $("#answer-2").slideToggle("slow");
    $("#question-2").toggleClass('border-change');
  	$("#question-2").toggleClass('background-change');
  });

  // 3
  $("#question-3").click(function(){
    $("#answer-3").slideToggle("slow");
    $("#question-3").toggleClass('border-change');
  	$("#question-3").toggleClass('background-change');
  });

  // 4
  $("#question-4").click(function(){
    $("#answer-4").slideToggle("slow");
    $("#question-4").toggleClass('border-change');
  	$("#question-4").toggleClass('background-change');
  });

  // 5
  $("#question-5").click(function(){
    $("#answer-5").slideToggle("slow");
    $("#question-5").toggleClass('border-change');
  	$("#question-5").toggleClass('background-change');
  });

  // 6
  $("#question-6").click(function(){
    $("#answer-6").slideToggle("slow");
    $("#question-6").toggleClass('border-change');
  	$("#question-6").toggleClass('background-change');
  });

});