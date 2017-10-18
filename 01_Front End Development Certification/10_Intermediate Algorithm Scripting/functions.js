//Create the range between two Numbers and return it as an array
function funcNumRange(varArr){
	var numMin = Math.min.apply(null, varArr);
	var numMax = Math.max.apply(null, varArr);
	var arrRange = [];
	
	for(var i = numMin; i <= numMax; i++){
		arrRange.push(i);
		}
		return arrRange;
	}

// Sum numbers in an array
function funcSumArray(numTotal, numElement) {
    return numTotal + numElement;
  }
//// Call the function
numArraySum = arrArray.reduce(funcSumArray, 0);