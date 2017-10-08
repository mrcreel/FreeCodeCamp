//URL of the quote API
var varUrl = "https://talaikis.com/api/quotes/";
var i = 0;

// function funcGetQuoteList() {
//     // Get quotes 100 at a time
//     $.getJSON(varUrl, function(data) {
//         /*
//         funcPopulateQuoteBox(data);
//         */
//     });
// }

$(document).ready(function() {

	console.log(i);

	$('#btn-next').click(function() {
		 i+=1;

		 console.log(i);
		});

	$('#btn-prev').click(function() {
		i-=1;

		console.log(i);
		});

});