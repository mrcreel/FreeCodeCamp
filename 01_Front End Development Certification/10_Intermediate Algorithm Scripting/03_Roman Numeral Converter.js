function convertToRoman(num) {

    var roman = "";

    var i = 0;

    var quotient = 0;
    var remainder = num;

    var numerals = [
    	{"letter":"M",
    	"value": 1000,
    	"max" :3},
    	{"letter":"D",
    	"value": 500,
    	"max" :1},
    	{"letter":"C",
    	"value": 100,
    	"max" :3},
    	{"letter":"L",
    	"value": 50,
    	"max" :1},
    	{"letter":"X",
    	"value": 10,
    	"max" :3},
    	{"letter":"V",
    	"value": 5,
    	"max" :1},
    	{"letter":"I",
    	"value": 1,
    	"max" :3}
    ];

    for(i = 0; i < numerals.length; i++ ){

    	quotient = Math.floor(remainder/numerals[i].value);
    	remainder = remainder%numerals[i].value;
    	console.log(numerals[i].letter, quotient);
    }
}

convertToRoman(3999);