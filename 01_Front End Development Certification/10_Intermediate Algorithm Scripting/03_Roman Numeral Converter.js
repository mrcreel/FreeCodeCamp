function convertToRoman(num) {

	var roman="";
	var key = "";
	var val = 0;

	var numerals = {
		"M":1000,
		"D":500,
		"C":100,
		"L":50,
		"X":10,
		"V":5,
		"I":1
	};

	for (key in numerals) {
		console.log(numerals[key]);
	}

	for (val in numerals) {
		console.log(val);
	}

}

convertToRoman(36);
