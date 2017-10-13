//URL of the quote API
var varUrl = "https://talaikis.com/api/quotes/";
//Array of quotes
var arrQuotes;
//Array of categories
var arrCategories = {};
//Counter
var i = 0;
//Share string
var txtShare;

function funcGetQuoteList() {
  i = 0;
  // Get quotes 100 at a time
  $.getJSON(varUrl, function(data) {

  	//Reove long quotes to prevent scrolling on phones
  	data = data.filter(function(val){
          return (val.quote.length <= 200);
        });
    arrQuotes = data;
    funcButtonClicks(arrQuotes, i);
  });
}

function funcButtonClicks(arrQuotes, i) {
  funcPopulateQuoteBox(arrQuotes, i);

  funcPrevButtonStatus(i);

  $("#btn-next").click(function() {
    i += 1;

    if (i === arrQuotes.length) {
      funcGetQuoteList();
    }

    funcPrevButtonStatus(i);
    funcPopulateQuoteBox(arrQuotes, i);
  });

  $("#btn-prev").click(function() {
    i -= 1;

    if (i === -1) {
      i = 0;
    }

    funcPrevButtonStatus(i);
    funcPopulateQuoteBox(arrQuotes, i);
  });
}

function funcPopulateQuoteBox(arrQuotes, i) {
  funcTwitterButtonStatus(arrQuotes, i);

  $("#id-cat").html(arrQuotes[i].cat);
  $("#id-quote").html(arrQuotes[i].quote);
  $("#id-author").html(arrQuotes[i].author);
}

function funcPrevButtonStatus(i) {
  /*
	If it's the first quote since loading, the Previous button will be disabled
	 */

  if (i === 0) {
    $("#btn-prev").attr("disabled", "disabled");
    $("#btn-prev").attr("title", "Not Available");
  } else {
    $("#btn-prev").removeAttr("disabled");
    $("#btn-prev").attr("title", "Previous Quote");
  }
}

function funcTwitterButtonStatus(arrQuotes, i) {
  txtShare = arrQuotes[i].quote + " - " + arrQuotes[i].author;

  if (txtShare.length > 140) {
    $("#btn-twitter").attr("disabled", "disabled");
    $("#btn-twitter").attr("title", "Too Long to Tweet");
  } else {
    $("#btn-twitter").removeAttr("disabled");
    $("#btn-twitter").attr("title", "Tweet This");

    $("#btn-twitter")
      .unbind()
      .click(function() {
        /* Act on the event */
        window.open(
          "https://twitter.com/intent/tweet?text=" + txtShare,
          "_blank"
        );
      });
  }
}

$(document).ready(function() {
  funcGetQuoteList();
});
