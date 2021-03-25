function subarraySort(array) {
	let min = Infinity;
	let max = -Infinity;
	
	for (let i = 0; i < array.length; i++) {
		if (isOut(array, i)) {
			min = Math.min(min, array[i]);
			max = Math.max(max, array[i]);
			
			console.log(min, max)
		}
	}
	
	if (min === Infinity) return [-1, -1];
	// console.log(min, max)
	let j = 0;
	while (min >= array[j]) {
		j++;
	}
	
	let k = array.length - 1;
	
	while (max <= array[k]) {
		k--;
	}
	
	return [j, k];
}

const isOut = (array, i) => {
	if (i === 0) return array[i] > array[i + 1];
	if (i === array.length - 1) return array[i] < array[i - 1];
	
	return array[i] > array[i + 1] || array[i] < array[i - 1];
}

console.log(subarraySort([
	1,
	2,
	4,
	7,
	10,
	11,
	7,
	12,
	6,
	7,
	16,
	18,
	19
]));

// Do not edit the line below.
exports.subarraySort = subarraySort;
