$(document).ready(function() { // do this when the document is loaded
	$("#dialerContent").show(); // show the element with ID "element"
	$("#conatctContent").hide();
});

$("#button_id").click(function() { // when "button_id" is clicked
	$("#element").show(); // show element
	$("#other_element").hide();	// hide other element
});
