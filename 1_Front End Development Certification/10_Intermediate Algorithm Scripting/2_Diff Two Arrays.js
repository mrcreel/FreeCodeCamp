function diffArray(arr1, arr2) {
  var newArr = [];

  var test1 = "";
  var test2 = "";

  var resArr = [];

  newArr = arr1.concat(arr2);
  // Same, same; but different.

  var newSet = new Set(newArr);

  newSet.forEach( function(element, index) {
  	// statements

  	var test1 = newArr.indexOf(element);
  	var test2 = newArr.lastIndexOf(element);
  	if (test1 === test2){
  		resArr.push(element);
  	}
  });
  return resArr;

}

var x = diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
console.log(x);