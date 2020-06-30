$(document).ready(function() {
	// https://www.w3schools.com/js/js_timing.asp

	$(".linus .timeline-content").each(function(index, el) {
		
		$(this).delay(index * 1000).fadeIn(1000);
	});
});