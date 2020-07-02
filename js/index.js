$(document).ready(function() {
	
	setTimeout(lin1, 1000);

	function lin1() {
		/*	Status: Prototype
			
		*/	

		$("#lin1 h2, #lin1 p").css('visibility', 'visible');

		// Scroll to element 
			// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
		let element = document.getElementById("lin1"); // jQuery syntax not working

		element.scrollIntoView({behavior: "smooth", block: "end"});
	}
});
