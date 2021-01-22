function hasSingleCycle(array) {
	let i = 0;
	let n = array.length;
	
	let increment;
	let counter = 0;
	
	while (array[i] !== null) {
		increment = array[i];
		array[i] = null;
		
		i += increment % n;
		
		if (i < 0) i += n;
		else if (i >= n) i -= n;
		
		counter++;
	}
	
	if (i === 0 && counter === n) return true;
	
	return false;
}

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;
