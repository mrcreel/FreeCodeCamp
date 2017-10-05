var varQuote;
var varAuthor;
var varTweetLength;
var varRand;

var varUrl = "https://talaikis.com/api/quotes/";

function funcGetNextQuote(arrQuotes) {

    if (arrQuotes.length > 0) {

        varRand = Math.floor(arrQuotes.length * Math.random());

        varQuote = arrQuotes[varRand].quote;
        varAuthor = arrQuotes[varRand].author;

        varTweetLength = varQuote.length + varAuthor.length + 3;

        $("#id-quote").html(varQuote);
        $("#id-author").html(varAuthor);

        if(varTweetLength > 140) {
        	console.log(varTweetLength);
        } else {
        	
        }

        return arrQuotes;

    } else {
        funcGetQuoteList();
    }
}

function funcGetQuoteList() {


    // Get quotes 100 at a time
    $.getJSON(varUrl, function(data) {

        // Find quotes shorter than 150 chrs
        arrQuotes = data.filter(function(val) {
            return (val.quote.length < 140);
        });

        funcGetNextQuote(arrQuotes);

        $("#btn-next").click(function() {
            funcGetNextQuote(arrQuotes);


        });

    });
}
$(document).ready(function() {

	funcGetQuoteList();

});