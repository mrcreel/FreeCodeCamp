
function sumAll(arr) {

	var total = 0;
	for (var i = Math.min.apply(null, arr); i <= Math.max.apply(null, arr); i++) {
		total += i;
	}
	return total;

}

