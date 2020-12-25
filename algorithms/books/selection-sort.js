const selectionSort = arr => {
	let minIndex;
	const l = arr.length;
	
	for (let i = 0; i < l; i++) {
		minIndex = i;
		
		for (let j = i; j < l; j++) {
			if (arr[minIndex] > arr[j]) {
				minIndex = j;
			}
		}

		const tmp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = tmp;
	}
	
	return arr;
}

console.log(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(selectionSort([2, 1]));
console.log(selectionSort([1, 2, 3]));
console.log(selectionSort([100, 2, 300, 0, 1000]));
