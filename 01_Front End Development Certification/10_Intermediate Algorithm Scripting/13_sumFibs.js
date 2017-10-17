function sumFibs(num) {
  var numFib = 0;
  var arrOddFibs = [];
  var arrFibs = [1, 1];

  function getSum(total, next) {
    return total + next;
  }
  for (var i = 2; i <= num; i++) {
    numFib = arrFibs[i - 1] + arrFibs[i - 2];
    if (numFib <= num) {
      arrFibs.push(numFib);
    } else {
      break;
    }
  }
  arrOddFibs = arrFibs.filter(function(el) {
    return (el % 2 === 1);
  });
  num = arrOddFibs.reduce(getSum, 0);
  return num;
}
sumFibs(10);