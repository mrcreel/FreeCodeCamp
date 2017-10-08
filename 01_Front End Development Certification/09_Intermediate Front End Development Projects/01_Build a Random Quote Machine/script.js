//URL of the quote API
var varUrl = "https://talaikis.com/api/quotes/";
//Array of quotes
var arrQuotes = [];
//Counter
var i = 0;

function funcGetQuoteList() {
	i = 0;
	// Get quotes 100 at a time
  $.getJSON(varUrl, function(arrQuotes) {
  	$("#id-counter").html(i);
    funcButtonClicks(arrQuotes);
  });
}

function funcButtonClicks(arrQuotes){

	$("#id-counter").html(i);
	$("#id-cat").html(arrQuotes[i].cat);
	$("#id-quote").html(arrQuotes[i].quote);
	$("#id-author").html(arrQuotes[i].author);

  $('#btn-next').click(function() {
		 i+=1;

		 if (i === arrQuotes.length){
		 	funcGetQuoteList();
		 }

		 $("#id-counter").html(i);
		 $("#id-cat").html(arrQuotes[i].cat);
		 $("#id-quote").html(arrQuotes[i].quote);
		 $("#id-author").html(arrQuotes[i].author);

		});

  $('#btn-prev').click(function() {
		i-=1;

		if(i === -1){
			i = 0;
			}

		$("#id-counter").html(i);
		$("#id-cat").html(arrQuotes[i].cat);
		$("#id-quote").html(arrQuotes[i].quote);
	  $("#id-author").html(arrQuotes[i].author);

		// funcPopulateQuoteBox(arrQuotes);

		});

}

function funcPopulateQuoteBox(arrQuotes){
}

$(document).ready(function() {

	funcGetQuoteList();

});