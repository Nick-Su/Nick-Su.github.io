$(document).ready(function(){
	// Phone mask 
	$("#client-phone").mask("+7 (999) 999 99-99");


	// Date Picker
  $( function() {
    $( "#datepicker-1" ).datepicker();
    $( "#datepicker-2" ).datepicker();
    $( "#datepicker-1" ).setDefaults( $.datepicker.regional[ "ru" ] );
  });

  $(".datepicker").datepicker({ 
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель','Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
'Октябрь', 'Ноябрь', 'Декабрь'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    firstDay: 1,
  });

  $( ".datepicker" ).datepicker( "option", "dateFormat", "dd-mm-yy" );

  /* 
  	Filter animation
  */

  // Add options
	$(".options-wrap").hide();
  	$( "#click-to-add" ).click(function() {
 		 $(".options-wrap").slideToggle("slow", function() {
  		});
	});

  // Final price
	$(".finalprice-wrap").hide();
  	$( "#calculate-btn" ).click(function() {
 		 $(".finalprice-wrap").slideToggle("slow", function() {
  		});
	});
});