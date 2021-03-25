const maxSubarraySum = array => {
	return traverse(array, 0, array.length - 1);
};

const traverse = (array, l, r) => {
	if (l === r) return array[l];
	
	const q = Math.floor((l + r) / 2);
	
	return Math.max(
		traverse(array, l, q),
		traverse(array, q + 1, r),
		midSum(array, l, q, r)
	);
}

const midSum = (array, l, q, r) => {
	let left = 0;
	let leftMax = -Infinity;
	
	for (let i = q; i >= l; i--) {
		left += array[i];
		leftMax = Math.max(leftMax, left);
	}
	
	let right = 0;
	let rightMax = -Infinity;
	
	for (let j = q + 1; j <= r; j++) {
		right += array[j];
		rightMax = Math.max(rightMax, right);
	}
	
	return leftMax + rightMax;
}

console.log(maxSubarraySum([
	13,
	-3,
	-25,
	20,
	-3,
	-16,
	-23,
	18,
	20,
	-7,
	12,
	-5,
	-22,
	15,
	-4,
	7
]));

console.log(maxSubarraySum([-1, -10]));
