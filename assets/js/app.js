var d = document

$(document).ready(function() {
	$("#navbarHeader").hide();

	$("#mobileMenuButton").click(function() {
		$("#navbarHeader").toggle();
	});
});

console.log(d)