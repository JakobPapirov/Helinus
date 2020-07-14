$(document).ready(function() {
	// https://www.w3schools.com/js/js_timing.asp

	/*$(".linus .timeline-content").each(function(index, el) {
		
		$(this).delay(index * 1000).fadeIn(1000);
	});*/

	/*	fadeIn() doesn't show hidden elements when they are visibility: hidden.
		It will show display: none.
			Mother fuckers.
		https://stackoverflow.com/questions/2992611/jquery-showing-a-hidden-item-with-a-fadein
	*/

	// Automatically generates Linus's IDs and adds them to the correct div
	let ids = $(".timeline-content div");

	const idX = [];
	for (let i = 0; i < ids.length; i++) {

		idX[i] = `lin${i}`;
		$(ids[i]).attr('id', idX[i] );
	}

	// function main runs every 2 seconds.. but only actually once.. Perhaps not the correct method after all..?
	//setInterval( main, 2000 );
	// https://javascript.info/settimeout-setinterval

	// >>> Has set setTimeout offline during work in the CSS <<<
	//setTimeout(main, 2000, idX);

	function main(idX) {
		// 
		linusShow(idX);
		// If works, Add helenShow() as awell as third-col
	}

	function linusShow(idX) {
		// 

		for (let i = 0; i < idX.length; i++) {
			$( "#" + idX[i] ).fadeIn( 3000 ); // default = 400, A higher value => slower fadeIn

			
		}
	}

	/*setTimeout(lin0, 1000);

	function lin0() {
		/*	Status: Prototype
			
		*/	

		//$( "#lin0" ).fadeIn( 2000 ); // default = 400, A higher value => slower fadeIn

		//$("#lin0 h2, #lin0 p").css('visibility', 'visible');

		/*	Not what I want. I want the text to fadeIn!
		*/
	//}

});