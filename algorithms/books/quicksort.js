const quickSort = array => {
	quickSortRecursion(array, 0, array.length - 1);
	
	return array;
};

const quickSortRecursion = (array, start, end) => {
	if (start >= end) return;
	
	const position = sort(array, start, end);
	
	quickSortRecursion(array, start, position - 1);
	quickSortRecursion(array, position + 1, end);
};

const swap = (array, i, j) => {
	const tmp = array[i];
	array[i] = array[j];
	array[j] = tmp;
}

const sort = (array, start, end) => {
	const pivotIdx = Math.floor(Math.random() * (end - start + 1)) + start;
	
	swap(array, pivotIdx, end);
	
	const pivot = array[end];
	
	let rightIdx = start;
	
	for (let i = start; i < end; i++) {
		if (array[i] < pivot) {
			swap(array, i, rightIdx);
			rightIdx++;
		}
	}
	
	swap(array, rightIdx, end);
	
	return rightIdx;
};

console.log(quickSort([3, 2, 1]));
console.log(quickSort([2, 1]));
console.log(quickSort([1, 2]));
console.log(quickSort([100, 2, 0, 3, 1, 10, 20, 99]));
console.log(quickSort([5, 6, 0, 3, 101, 10, 15, 1999]));
console.log(quickSort([5, 4, 3, 2, 1]));
console.log(quickSort([5, 4, 3, 2, 7, 8]));
console.log(quickSort([1, 1, 1, 2, 3, 5]));
