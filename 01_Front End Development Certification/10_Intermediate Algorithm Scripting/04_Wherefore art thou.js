function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  function funcTrueCheck(element, index, array) {
    return element === true;
  }
  collection.forEach(function(element, index) {
    // statements
    var arrResult = [];
    for (var target in source) {
      arrResult.push(source[target] === element[target]);
    }
    if (arrResult.every(funcTrueCheck)) {
      arr.push(element);
    }
  });
  // Only change code above this line
}
x = whatIsInAName([{
  "a": 1,
  "b": 2
}, {
  "a": 1
}, {
  "a": 1,
  "b": 2,
  "c": 2
}], {
  "a": 1,
  "c": 2
});
// console.log(x);