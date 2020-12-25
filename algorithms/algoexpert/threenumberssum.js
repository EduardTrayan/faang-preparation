function threeNumberSum(array, targetSum) {
	const l = array.length;
	let out = [];
	
	if (l < 3) return out;
	
	const sorted = array.sort((a, b) => a - b);
	
	for (let i = 0; i < l - 2; i++) {
		let j = i + 1;
		let k = l - 1;
		
		while (j < k) {
			const sum = sorted[i] + sorted[j] + sorted[k];
			
			if (sum === targetSum) {
				out.push([
					sorted[i],
					sorted[j],
					sorted[k]
				]);
				
				j++;
				k--;
			} else if (sum < targetSum) {
				j++;
			} else {
				k--;
			}
		}
	}
	
	return out;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
