$(document).ready(function() {
	$("#dialerContent").show(); 
	$("#contactContent").hide();
	$("#addContent").hide();
});

$("#dialerName").click(function() { // when "button_id" is clicked
	$("#dialerContent").show(); // show element
	$("#contactContent").hide();
	$("#addContent").hide();
});

$("#contactName").click(function() { // when "button_id" is clicked
	$("#contactContent").show(); // show element
	$("#dialerContent").hide();
	$("#addContent").hide();
});

$("#addName").click(function() { // when "button_id" is clicked
	$("#addContent").show(); // show element
	$("#dialerContent").hide();
	$("#contactContent").hide();
});



