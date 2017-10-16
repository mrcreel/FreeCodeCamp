function translatePigLatin(str) {
  var arrVowels = ["a", "e", "i", "o", "u"];
  var arrResult = [];
  arrVowels.forEach(function(element, index) {
    if (str.indexOf(element) >= 0) {
      arrResult.push(str.indexOf(element));
    }
  });
  var numFirstVowel = Math.min.apply(null, arrResult);
  if (numFirstVowel == 0) {
    str = str + "way";
  } else {
    str = str.slice(numFirstVowel) + str.slice(0, numFirstVowel) + "ay";
  }
  return str;
}
translatePigLatin("eight");