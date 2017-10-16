function pairElement(str) {
  str = str.split("");
  var arrPairs = ['G', 'C', 'A', 'T'];
  var arrResults = [];
  var varTwin = "";
  str.forEach(function(element, index) {
    varTemp = arrPairs.indexOf(element);
    if (varTemp % 2 === 1) {
      varTwin = arrPairs[varTemp - 1];
    } else {
      varTwin = arrPairs[varTemp + 1];
    }
    arrResults.push([element, varTwin]);
  });
  return arrResults;
}
pairElement("CTCTA");