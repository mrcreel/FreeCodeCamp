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

    function funcPrimesBelow(numNumber) {
    	var arrPrimes = [];
        for (var i = 2; i <= numNumber; i++) {
            var numHalf = Math.floor(i / 2);
            var arrTemp = [];
            
            for (var j = 2; j <= numHalf; j++) {
                if (i % j === 0) {
                    arrTemp.push(j);
                }
            }
            if (arrTemp.length === 0) {
                arrPrimes.push(i);
            }
        }
        return arrPrimes;
    }

    function funcFindFactors(numNumber, arrArray){
    	var arrFactors = [];

    	numNumber = 12;
    	arrArray = [2, 3, 5, 7, 11];

    	arrArray.forEach( function(element, index) {
    		// statements
    		if (numNumber%element === 0){
    			console.log(numNumber, 
    				element, 
    				Math.floor(numNumber/element));
    		}    		
    	});
    }


    arrNumRange = funcNumRange(arr, true);
    var arrRange = arrNumRange[0];
    var numMin = arrNumRange[1];
    var numMax = arrNumRange[2];

    arrPrimes = funcPrimesBelow(numMax);

    console.log(arrPrimes);

    console.log(funcFindFactors());



    return arr;
}


//smallestCommons([1, 5]); // should return 60.
smallestCommons([12, 1]); // should return 60.
//smallestCommons([1, 13]); // should return 360360.
//smallestCommons([23, 18]); // should return 6056820.
//
//