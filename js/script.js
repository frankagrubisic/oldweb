// changing section text

$(function() {

$('#button0').click(function(){
	$('.start').removeClass('active');
	$('.secs').removeClass('active');
  	$('#intro').addClass('active');
});

$('#button1').click(function(){
	$('.secs').removeClass('active');
	$('.start').removeClass('active');
	$('.start').addClass('nonactive');
  	$('#backstory').addClass('active');
});

$('#button2').click(function(){
	$('.secs').removeClass('active');
	$('.start').removeClass('active');
	$('.start').addClass('nonactive');
  	$('#passion').addClass('active');
});

$('#button3').click(function(){
	$('.secs').removeClass('active');
	$('.start').removeClass('active');
	$('.start').addClass('nonactive');
 	 $('#knowledge').addClass('active');
});

$('#button4').click(function(){
	$('.secs').removeClass('active');
	$('.start').removeClass('active');
	$('.start').addClass('nonactive');
 	 $('#endeavours').addClass('active');
});

$('#button5').click(function(){
	$('.secs').removeClass('active');
	$('.start').removeClass('active');
	$('.start').addClass('nonactive');
 	 $('#facts').addClass('active');
});

$('#button6').click(function(){
	$('.secs').removeClass('active');
	$('.start').removeClass('active');
	$('.start').addClass('nonactive');
  	$('#why').addClass('active');
});

});

