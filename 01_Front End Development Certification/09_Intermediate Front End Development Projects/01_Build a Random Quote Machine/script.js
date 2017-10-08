//URL of the quote API
var varUrl = "https://talaikis.com/api/quotes/";
//Array of quotes
var arrQuotes = [];
//Counter
var i = 0;
//Share string
var txtShare;

function funcGetQuoteList() {
	i = 0;
	// Get quotes 100 at a time
  $.getJSON(varUrl, function(arrQuotes) {
  	$("#id-counter").html(i);
    funcButtonClicks(arrQuotes);
  });
}

function funcButtonClicks(arrQuotes){

		funcPopulateQuoteBox(arrQuotes, i);

  $('#btn-next').click(function() {
		 i+=1;

		 if (i === arrQuotes.length){
		 	funcGetQuoteList();
		 }

		 funcPopulateQuoteBox(arrQuotes, i);

		});

  $('#btn-prev').click(function() {
		i-=1;

		if(i === -1){
			i = 0;
			}

		funcPopulateQuoteBox(arrQuotes, i);

		});

}

function funcPopulateQuoteBox(arrQuotes, i){

	txtShare = arrQuotes[i].quote;
	txtShare += "-";
	txtShare += arrQuotes[i].author;

  $("#id-counter").html(i);
  $("#id-cat").html(arrQuotes[i].cat);
  $("#id-quote").html(arrQuotes[i].quote);
	$("#id-author").html(arrQuotes[i].author);

}

$(document).ready(function() {

	funcGetQuoteList();

});