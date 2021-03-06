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

	funcPrevButtonStatus(i);

  $('#btn-next').click(function() {
		 i+=1;

		 if (i === arrQuotes.length){
		 	funcGetQuoteList();
		 }

		 funcPrevButtonStatus(i);
		 funcPopulateQuoteBox(arrQuotes, i);

		});

  $('#btn-prev').click(function() {
		i-=1;

		if(i === -1){
			i = 0;
			}

			funcPrevButtonStatus(i);
			funcPopulateQuoteBox(arrQuotes, i);

		});



}

function funcPopulateQuoteBox(arrQuotes, i){

	txtShare = arrQuotes[i].quote;
	txtShare += " - ";
	txtShare += arrQuotes[i].author;

	funcTwitterButtonStatus(txtShare);

  $("#id-cat").html(arrQuotes[i].cat);
  $("#id-quote").html(arrQuotes[i].quote);
	$("#id-author").html(arrQuotes[i].author);

}

function funcPrevButtonStatus(i){
	/*
	If it's the first quote since loading, the Previous button will be disabled
	 */
	var btnPrev = document.getElementById("btn-prev");

	if (i === 0) {
		$('#btn-prev').attr('disabled', 'disabled');
		$('#btn-prev').attr('title', 'Not Available');
	} else {
		$('#btn-prev').removeAttr('disabled');
		$('#btn-prev').attr('title', 'Previous Quote');
	}
}

function funcTwitterButtonStatus(){

  //console.log(txtShare);
	//console.log(txtShare.length);

	var btnTwitter = document.getElementById("btn-twitter");

	if ( txtShare.length >= 140) {
		$('#btn-twitter').attr('disabled', 'disabled');
		$('#btn-twitter').attr('title', 'Not Available');
	} else {
		$('#btn-twitter').removeAttr('disabled');
	 	$('#btn-twitter').attr('title', 'Tweet This');
  }

    $('#btn-twitter').click(function() {
  	/* Act on the event */
  	console.log(txtShare);
  });


}


$(document).ready(function() {

	funcGetQuoteList();

});