$( document ).ready(function(){

//type in temperature to input area
//take input information and convert it to F
//compare the temperature to the levels for each picture
	// over 85 is a desert pic
	//between 50-85 is a meadow pic
	// under 50 is a snowy pic
//change picture to specific background
//output F temperature to page


$("#currentTemp").val(convertTemp);

function convertTemp(){
	var celsius = $("#currentTemp").val();
	var fahrenheit = (celsius * (9/5)) + 32;

if( fahrenheit > 85)
	$("body").attr("class" , "#desert");
else if ( fahrenheit < 50 )
	$("body").attr("class" , "#cold");
else if ( fahrenheit > 50 && fahrenheit < 85)
	$("body").attr("class" , "#GreatMeadows");
}





});