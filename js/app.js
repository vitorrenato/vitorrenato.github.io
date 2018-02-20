var d = document;

$(function() {
	$("#navbarHeader").hide();

	$("#dropdownMenuButton").click(function() {
		$("#navbarHeader").toggle();
	});
});

console.log(d);