function uniteUnique(arr) {
	var arrResults = [];

	for(var i = 0; i < arguments.length; i++){
		for(var j = 0; j < arguments[i].length; j++){
			var varArg = arguments[i][j];
			var numIndexOf = arrResults.indexOf(varArg);
			if(numIndexOf === -1){
				arrResults.push(varArg);
			}
		}
	}

	console.log(arrResults);

  return arrResults;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);