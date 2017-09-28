function convertToRoman(num) {

	var roman="";
	var key = "";
	var val = 0;
	var max = 0;

	var i = 0;

	var quotient = 0;
	var remainder = num;

	numerals = {
		"M":1000,
		"D":500,
		"C":100,
		"L":50,
		"X":10,
		"V":5,
		"I":1
	};

	for (i in numerals){
    if (numerals.hasOwnProperty(i)) {
    	
    	quotient = Math.floor(remainder/numerals[i]);
    	remainder = num % numerals[i];

    	console.log("Key is " + i + ", value is " + numerals[i]);
    	console.log(quotient, remainder, i);
    	
    }
	}

	// for (key in numerals) {
	// 	//console.log(numerals[key]);
	// }

	// for (val in numerals) {
	// 	// console.log(val);
	// }

}

convertToRoman(3999);
