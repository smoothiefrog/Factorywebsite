$(document).ready(function() {
	$(".ui-main-imf-eve").on("mouseover", function(event) {
		$(this).css("opacity", "0.6");
	});
	$(".ui-main-imf-eve").on("mouseout", function(event) {
		$(this).css("opacity", "1");
	});

	$(".ui-main-top-text").on("mouseover", function(event) {
		$(this).css("opacity", "0.6");
	});
	$(".ui-main-top-text").on("mouseout", function(event) {
		$(this).css("opacity", "1");
	});

	
	$("#culture").on("click", function() {
		var pos = $("div[name='culture']").offset().top - 50;
		$("body").animate({scrollTop : pos,})
	});

	$("#about").on("click", function() {
		var pos = $("div[name='about']").offset().top - 50;
		$("body").animate({scrollTop : pos,})
	});
})
