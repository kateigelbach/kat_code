//Hide Navigation list and add menu link before
$("#nav").addClass("js").before('<div id="menu">&#9776; <h2>Louisville Metro Parks</h2></div>');

//add click listener and toggle the visibility
$("#menu").click(function() {
	$("#nav").toggle();
});

//hide nav when viewport increases
$(window).resize(function() {
	if(window.innerWidth > 768) {
		$("#nav").removeAttr("style");
	}
});