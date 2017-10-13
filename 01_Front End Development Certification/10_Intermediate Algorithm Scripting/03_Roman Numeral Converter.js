
function convertToRoman(num) {

	var remainder = num;
	var quotient = 0;
	var arrRomanNumerals = [{
		"letter": "M",
		"value": 1000
	}, {
		"letter": "CM",
		"value": 900
	}, {
		"letter": "D",
		"value": 500
	}, {
		"letter": "CD",
		"value": 400
	}, {
		"letter": "C",
		"value": 100
	}, {
		"letter": "XC",
		"value": 90
	}, {
		"letter": "L",
		"value": 50
	}, {
		"letter": "XL",
		"value": 40
	}, {
		"letter": "X",
		"value": 10
	}, {
		"letter": "IX",
		"value": 9
	}, {
		"letter": "V",
		"value": 5
	}, {
		"letter": "IV",
		"value": 4
	}, {
		"letter": "I",
		"value": 1
	}];
	if (num < 1 || num > 3999) {
		console.log('Enter a number between 1 and 3999');
	} else {
		var res = "";
		for (var key in arrRomanNumerals) {
			// check if the property/key is defined in the object itself, not in parent
			if (arrRomanNumerals.hasOwnProperty(key)) {
				value = arrRomanNumerals[key].value;
				letter = arrRomanNumerals[key].letter;
				quotient = Math.floor(remainder / value);
				remainder = remainder % value;
				strLetter = letter.repeat(quotient);
				res = res + strLetter;
				
			}
		}
      
      return res;
	}

}

convertToRoman(36);
