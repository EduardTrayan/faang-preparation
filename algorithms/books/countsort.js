const countSort = (array, m) => {
	const n = array.length;
	
	let count = [];
	let offset = [];
	let next = [];
	let out = [];
	
	let i;
	let curr;
	
	offset[0] = 0;
	next[0] = 0;
	
	for (i = 0; i <= m; i++) count[i] = 0;
	for (i = 0; i < n; i++) count[array[i]] += 1;
	for (i = 1; i <= m; i++) {
		offset[i] = offset[i - 1] + count[i - 1];
		next[i] = offset[i];
	}
	
	for (i = 0; i < n; i++) {
		curr = array[i];
		out[next[curr]] = curr;
		next[curr] += 1;
	}
	
	return out;
}

console.log(countSort([3, 2, 1, 0], 3));
console.log(countSort([2, 1], 2));
console.log(countSort([1, 2], 2));
console.log(countSort([100, 2, 0, 3, 1, 10, 20, 99], 100));
console.log(countSort([5, 6, 0, 3, 101, 10, 15, 1999], 2000));
