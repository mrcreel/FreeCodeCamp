function convertToRoman(num) {

	var roman = [];

	var i = 0;

	var varLetter = "";
	var varValue = 0;
	var varMax = "";
	var varchild = "";

	var quotient = 0;
	var remainder = num;

	var thousands = 0;

	var varString = function(i, num){

		thousands = Math.floor(num/1000);
		remainder = num%1000;

	};


	var numerals = [{
		"letter": "M",
		"value": 1000,
		"max": 3,
		"child": "M"
	}, {
		"letter": "D",
		"value": 500,
		"max": 1,
		"child": "D"
	}, {
		"letter": "C",
		"value": 100,
		"max": 3,
		"child": "CD"
	}, {
		"letter": "L",
		"value": 50,
		"max": 1,
		"child": "L"
	}, {
		"letter": "X",
		"value": 10,
		"max": 3,
		"child": "XL"
	}, {
		"letter": "V",
		"value": 5,
		"max": 1,
		"child": "V"
	}, {
		"letter": "I",
		"value": 1,
		"max": 3,
		"child": "IV"
	}];

	thousands = Math.floor(num/1000);
	remainder = num%1000;

	console.log(
		thousands,
		remainder);

	return roman.join("");

}

convertToRoman(3999);

//console.log(convertToRoman(798));