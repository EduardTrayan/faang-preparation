function smallestDifference(arrayOne, arrayTwo) {
	const sorted1 = arrayOne.sort((a, b) => a - b);
	const sorted2 = arrayTwo.sort((a, b) => a - b);
	
	let p1 = 0;
	let p2 = 0;
	
	let minDiff = Math.abs(sorted1[0] - sorted2[0]);
	let val1;
	let val2;
	
	let current1;
	let current2;
	
	while (p1 < sorted1.length && p2 < sorted2.length) {
		current1 = sorted1[p1];
		current2 = sorted2[p2];
		
		const currentDiff = Math.abs(current1 - current2);
		
		if (currentDiff === 0) {
			return [current1, current2];
		}
		
		if (currentDiff < minDiff) {
			val1 = current1;
			val2 = current2;
			
			minDiff = currentDiff;
		}
		
		current1 > current2 ? p2++ : p1++;
	}
	
	return [val1, val2];
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
