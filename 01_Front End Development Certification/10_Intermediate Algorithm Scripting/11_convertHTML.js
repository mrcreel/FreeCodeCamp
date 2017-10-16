function convertHTML(str) {

	var varResult = "";

	var objChars = {
		apostrophe: {"varChar": "[/'/g]", "varRepl":"&apos;"}//,
		// ampersand: {"varChar": "[/&/g]", "varRepl":"&amp;"},
		// lessThan: {"varChar": "[/</g]", "varRepl":"&lt;"},
		// greaterThan: {"varChar": "[/>/g]", "varRepl":"&gt;"},
		// quotation: {"varChar": '[/"/g]', "varRepl":"&quot;"}
		// "[/'/g]":"&apos;"},
		// "/&/g":"&amp;",
		// "[/</g]":"&lt;",
		// "[/>/g]":"&gt;",
		// '[/"/g]':"&quot;"
	};

	function funcFindReplace(varResult, o){
		var varResultSlice;
		var n = varResult.search(objChars[o].varChar);
		if(n != -1) {
			varResultSlice = varResult.slice(0, n).concat(
				objChars[o].varRepl,
				varResult.slice(n+1));

			console.log(
			varResult,
			"|",
			objChars[o].varChar,
			":",
			n,
			"|",
			objChars[o].varRepl,
			"|",
			varResultSlice
			);
		}

		return varResultSlice;

	}


	for (var o in objChars){
		funcFindReplace(str, o);
		}
		
  // &colon;&rpar;
  return str;
}

convertHTML("Shindler's List");
