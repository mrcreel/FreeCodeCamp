function myReplace(str, before, after) {
  arrSentence = str.split(" ");
  arrSentence.indexOf(before);
  console.log(arrSentence, arrSentence.indexOf(before), before[0] === before[0]
    .toUpperCase());
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  arrSentence[arrSentence.indexOf(before)] = after;
  str = arrSentence.join(" ");
  return str;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");