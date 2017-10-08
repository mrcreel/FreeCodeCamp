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
  //console.log(arrQuotes);

  $('#btn-next').click(function() {
		 i+=1;
		 $("#id-counter").html(i);

		 if (i === arrQuotes.length){
		 	funcGetQuoteList();
		 }
		});

  $('#btn-prev').click(function() {
		i-=1;
		if(i === -1){
			i = 0;
			}
		$("#id-counter").html(i);
		});

}

function funcPopulateQuoteBox(arrQuotes, i){
	
}

$(document).ready(function() {

	funcGetQuoteList();

});