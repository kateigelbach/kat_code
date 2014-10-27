//Hide Navigation list and add menu link before
$("#nav").addClass("js").before('<div id="menu"><h2>&#9776; Louisville Metro Parks</h2></div>');

//add click listener and toggle the visibility
$("#menu").click(function() {
	$("#nav").toggle();
});

//hide dropped down nav when viewport increases
$(window).resize(function() {
	if(window.innerWidth > 768) {
		$("#nav").removeAttr("style");
	}
});

//remove js class from nav for larger screens
$(document).ready(function() {
	if(window.innerWidth > 768) {
		$( "#nav" ).removeClass( "js" );
	}
}); 