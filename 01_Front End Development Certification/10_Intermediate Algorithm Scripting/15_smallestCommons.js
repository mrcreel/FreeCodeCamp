function smallestCommons(arr) {

    function funcMinMax(arrArray) {
        var min = Math.min.apply(null, arrArray);
        var max = Math.max.apply(null, arrArray);
        return [min, max];
    }

    function funcNumRange(arrArray, boolRemoveNumberOne) {
        var varMinMax = funcMinMax(arrArray);
        var min = varMinMax[0];
        var max = varMinMax[1];

        var arrRange = [];
        if (boolRemoveNumberOne && min === 1) {
            min = 2;
        }
        for (var i = min; i <= max; i++) {
            arrRange.push(i);
        }
        return [arrRange, min, max];
    }

    function funcIsPrimeOrFactors(numNumber) {
        // body... 
        var numHalf = Math.floor(numNumber / 2);
        var arrFactors = [];

        for (var i = 2; i <= numHalf; i++) {
            var numQuotient = Math.floor(numNumber / i);
            var numRemainder = numNumber % i;
            if (numRemainder === 0) {
                var varMinMax = funcMinMax([i, numQuotient]);
                var min = varMinMax[0];
                var max = varMinMax[1];
                arrFactors.push([min, max]);
            }
        }
        arrUniqueFactors = arrFactors.slice(0, Math.ceil(arrFactors.length / 2));
        return {
            "number": numNumber,
            "prime": arrUniqueFactors.length === 0,
            "factors": arrUniqueFactors
        };
    }

    function funcPrimesBelow(numNumber) {
        var arrPrimesBelow = [];
        for (i = 2; i <= numNumber; i++) {

            var varReturn = funcIsPrimeOrFactors(i);
            if (varReturn.prime === true) {
                arrPrimesBelow.push(varReturn.number);
            }
        }
        return arrPrimesBelow;
    }

    arrNumRange = funcNumRange(arr, true);
    var arrRange = arrNumRange[0];
    var numMin = arrNumRange[1];
    var numMax = arrNumRange[2];

    // arrPrimeOrFactors = funcIsPrimeOrFactors(numMax);
    // if (arrPrimeOrFactors.prime === true) {
    //     arrPrimeOrFactors.factors.push(numMax);
    // }
    // arrPrimesBelow = funcPrimesBelow(numMax);

    arrRange.forEach( function(element, index) {
      	// statements
      	var arrPrimeFactors = [];
      	var arrPrimesBelow = [];
      	var arrSpecs = funcIsPrimeOrFactors(element);
      	var numVar = element;
      	var numIndex = index;
      	var boolIsPrime = arrSpecs.prime;
      	var arrFactors = arrSpecs.factors;

      	arrPrimesBelow = funcPrimesBelow(numVar);
      	
      	var numTest = numVar;

      	for (var a in arrPrimesBelow) {
      		// statements      		
      		var varElement = arrPrimesBelow[a];
      		console.log(numTest);
      		console.log("-----");

      		

      		var numQuotient = Math.floor(numTest/varElement);
      		var numRemainder = numTest % varElement;

      		if(numRemainder === 0){
      			arrPrimeFactors.push(varElement);
      			numTest -= element;
      			if(numTest === 0){
      				return;
      		}}

      		console.log(varElement,
      			numQuotient,
      			numRemainder
      			);
      	}





      	
  	});









    return arr;
}


//smallestCommons([1, 5]); // should return 60.
smallestCommons([12, 12]); // should return 60.
//smallestCommons([1, 13]); // should return 360360.
//smallestCommons([23, 18]); // should return 6056820.
//
//