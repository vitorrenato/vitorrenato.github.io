var d = document;

$(document).ready(function() {

});

$(function() {
	$("#navbarHeader").hide();

	$("#dropdownMenuButton").click(function() {
		$("#navbarHeader").toggle("slow", function() {
			//Animation
		}, 500);
	});
});

console.log(d);