console.log("Working!");

$(document).ready(function(e) {
	$("#hikeList").empty();
	$("#homeWelcome").addClass('animated fadeIn');
	$("#homeSubHeading").addClass('animated fadeIn');
	$("#wishListHeader").addClass('animated fadeIn');
	$("#profileSubHeader").addClass('animated fadeIn');

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

