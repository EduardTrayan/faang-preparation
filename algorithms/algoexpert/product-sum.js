// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array) {
	let stack = [];
	let sum = 0;
	
	stack.push({
		arr: array,
		depth: 1,
		multiplier: 1
	});
	
	let curr;
	
	while (curr = stack.pop()) {
		const arr = curr.arr;
		const depth = curr.depth;
		const multiplier = curr.multiplier;
		
		for (let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i])) {
				stack.push({
					arr: arr[i],
					depth: depth + 1,
					multiplier: multiplier * (depth + 1)
				})
			} else {
				
				sum += arr[i] * multiplier;
			}
		}
	}
	
	return sum;
}

console.log(productSum(
	[[[[[5]]]]]
))

// Do not edit the line below.
exports.productSum = productSum;
