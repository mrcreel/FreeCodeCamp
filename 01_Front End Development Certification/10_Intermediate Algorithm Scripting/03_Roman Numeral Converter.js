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
	var fiveHundreds = 0;
	var hundreds = 0;
	var fifties = 0;
	var tens = 0;
	var fives = 0;
	var ones = 0;

	func4or9 = function(a, b){
	};

	console.log(remainder);
	thousands = Math.floor(remainder/1000);
	remainder = num%1000;
	roman.push(Array(thousands+1).join('M'));
		console.log(
			3,
			thousands,
			thousands == 4 || thousands == 9,
			thousands*1000,
			roman.join('')
			);

		console.log(remainder);
		fiveHundreds = Math.floor(remainder/500);
		remainder = num%500;
		roman.push(Array(fiveHundreds+1).join('D'));
		console.log(
			1,
			fiveHundreds,
			fiveHundreds == 4 || fiveHundreds == 9,
			fiveHundreds*500,
			roman.join('')
			);

		console.log(remainder);
		hundreds = Math.floor(remainder/100);
		remainder = num%100;
		roman.push(Array(hundreds+1).join('C'));
		console.log(
			3,
			hundreds,
			hundreds == 4 ||hundreds == 9,
			hundreds*100,
			roman.join('')
			);

		fifties = Math.floor(remainder/50);
		remainder = num%50;
		roman.push(Array(fifties+1).join('L'));
		console.log(
			1,
			fifties,
			fifties == 4 ||fifties == 9,
			fifties*50,
			roman.join(''),
			remainder);

		tens = Math.floor(remainder/10);
		remainder = num%10;
		roman.push(Array(tens+1).join('X'));
		console.log(
			3,
			tens,
			tens == 4 ||tens == 9,
			tens*10,
			roman.join(''),
			remainder);

		fives = Math.floor(remainder/5);
		remainder = num%5;
		roman.push(Array(fives+1).join('V'));
		console.log(
			1,
			fives,
			fives == 4 ||fives == 9,
			fives*5,
			roman.join(''),
			remainder);

		ones = remainder;
		roman.push(Array(ones+1).join('I'));
		console.log(
			1,
			ones,
			ones == 4 ||ones == 9,
			fives*5,
			roman.join(''),
			remainder);

	return roman.join("");

}

convertToRoman(3999);

//console.log(convertToRoman(798));