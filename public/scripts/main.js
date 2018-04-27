console.log("Working!");

$(document).ready(function() {
	$("#homeWelcome").addClass('animated fadeIn');
	$("#homeSubHeading").addClass('animated fadeIn');
});

$('.removeWish').click(function(e) {
	e.preventDefault();
	$.ajax({
		method: "DELETE",
		url: $(this).attr("href")
	}).done(function(data) {
		window.location.reload();
	});
});

