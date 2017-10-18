//Create the range between two Numbers and return it as an array
function funcNumRange(varArr) {
    var numMin = Math.min.apply(null, varArr);
    var numMax = Math.max.apply(null, varArr);
    var arrRange = [];

    for (var i = numMin; i <= numMax; i++) {
        arrRange.push(i);
    }
    return arrRange;
}

// Sum numbers in an array
function funcSumArray(numTotal, numElement) {
    return numTotal + numElement;
}
//// Call the function
//numArraySum = arrArray.reduce(funcSumArray, 0);

function funcIsPrimeOrFactors(numNumber) {
    // body... 
    var numHalf = Math.floor(numNumber / 2);
    var arrFactors = [];

    for (var i = 2; i <= numHalf; i++) {
        var numQuotient = Math.floor(numNumber / i);
        var numRemainder = numNumber % i;
        if (numRemainder === 0) {
            arrFactors.push([i, numQuotient]);
        }
    }
    console.log(arrFactors);
    return [arrFactors.length === 0, arrFactors];
}