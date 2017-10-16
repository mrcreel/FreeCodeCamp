function fearNotLetter(str) {
  var numFirstChar = str.charCodeAt(0);
  var numLastChar = str.charCodeAt(str.length - 1);
  var j = 0;
  var res;
  for (var i = numFirstChar; i <= numLastChar; i++) {
    if (i != str.charCodeAt(j)) {
      res = String.fromCharCode(i);
      break;
    }
    j++;
  }
  console.log(res);
  return res;
}
fearNotLetter("bcd");