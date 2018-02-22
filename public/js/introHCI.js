'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$("button").click(projectClick);
}

function projectClick(e) {
	e.preventDefault();
	// ga("send", "event", "like", "click"); DOESN'T WORK
	gtag('event', 'click', {
  		'event_category': 'like'
	});
	console.log("why is the ga not working wtf");
}