function sumPrimes(num) {
  var arrPrimes = [];

  function funcGetSum(total, next) {
    return total + next;
  }
  for (var i = 2; i <= num; i++) {
    var numHalf = Math.floor(i / 2);
    var arrFactors = [];
    for (var j = 2; j <= numHalf; j++) {
      //console.log(i, numHalf, j);
      //console.log(i, numHalf, j, i%j);
      if (i % j === 0) {
        arrFactors.push(j);
      }
    }
    if (arrFactors.length === 0) {
      arrPrimes.push(i);
    }

    console.log(arrPrimes);
  }
  num = arrPrimes.reduce(funcGetSum, 0);
  return num;
}
sumPrimes(12); // should return a number.
//sumPrimes(10); // should return 17.
//sumPrimes(977); // should return 73156.