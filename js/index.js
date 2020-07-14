$(document).ready(function() {
	// https://www.w3schools.com/js/js_timing.asp

	// Automatically generates IDs and adds them to the correct div
		// Linus'
		let idsLin = $(".linus .timeline-content div");

		const idXLin = []; // Var contains all the IDs
		for (let i = 0; i < idsLin.length; i++) {

			idXLin[i] = `lin${i}`;
			$(idsLin[i]).attr('id', idXLin[i] );
		}
		// Helen's
		let idsHel = $(".helen .timeline-content div");

		const idXHel = []; // Var contains all the IDs
		for (let i = 0; i < idsHel.length; i++) {

			idXHel[i] = `hel${i}`;
			$(idsHel[i]).attr('id', idXHel[i] );
		}
		// Middle Col-L
		let idsMCL = $(".middle-ColL .inv-timeline-content-ColL div");

		const idXMCL = []; // Var contains all the IDs
		for (let i = 0; i < idsMCL.length; i++) {

			idXMCL[i] = `midColL${i}`;
			$(idsMCL[i]).attr('id', idXMCL[i] );
		}
		// Middle Col-R
		let idsMCR = $(".middle-ColR .inv-timeline-content-ColR div");

		const idXMCR = []; // Var contains all the IDs
		for (let i = 0; i < idsMCR.length; i++) {

			idXMCR[i] = `midColR${i}`;
			$(idsMCR[i]).attr('id', idXMCR[i] );
		}

	// function main runs every 2 seconds.. but only actually once.. Perhaps not the correct method after all..?
	//setInterval( main, 2000 );
	// https://javascript.info/settimeout-setinterval

	// >>> Has set setTimeout offline during work in the CSS <<<
	// Controls when (delay) to set-off the function(s)
	/*
	setTimeout(main, 2000, idXLin); // Once

		// Main function that should trigger other functions
		function main(idXLin) {
			// 
			linusShow(idXLin);
			// If works, Add helenShow() as awell as third-col
		}

			// Function that displays Linus's cards
				// Currently all are shown at once (via fadein)
			function linusShow(idXLin) {
				// 

				for (let i = 0; i < idXLin.length; i++) {
					setTimeout(() => $( "#" + idXLin[i] ).fadeIn( 3000 ), 2000);
					//$( "#" + idXLin[i] ).fadeIn( 3000 ); // default = 400, A higher value => slower fadeIn
				}
			}
	*/

	function sleep(ms) {
		// body...
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	async function main() {
		// https://www.sitepoint.com/delay-sleep-pause-wait/

		for (let i = 0; i < idXLin.length; i++) {
			// Assuming (using Lin) I'll have symmetric number of IDs
			await sleep(2000);
			$( "#" + idXLin[i] ).fadeIn( 3000 );

			/*	>>> https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
				jQuery syntax not working
				https://stackoverflow.com/questions/4884839/how-do-i-get-an-element-to-scroll-into-view-using-jquery
				scrollIntoView is an JS method,
				jQuery would require another .animate() method

				Unsure why I couldn't package code below into autoScroll() - didn't work at all!
			*/
			let element = document.getElementById(idXLin[i]);
			element.scrollIntoView({behavior: "smooth", block: "start"});

			$( "#" + idXHel[i] ).fadeIn( 3000 );
			$( "#" + idXMCL[i] ).fadeIn( 3500 );
			$( "#" + idXMCR[i] ).fadeIn( 3500 );
		}
	}

	main(); // No inputs are required as the vars were made const's
});