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

const sort = (array, start, end) => {
	let right = start;
	let undef = start;
	let tmp;
	
	while (undef < end) {
		if (array[undef] <= array[end]) {
			tmp = array[undef];
			array[undef] = array[right];
			array[right] = tmp;
			
			right++;
		}
		
		undef++;
	}
	
	tmp = array[right];
	array[right] = array[end];
	array[end] = tmp;
	
	return right;
};

console.log(quickSort([3, 2, 1]));
console.log(quickSort([2, 1]));
console.log(quickSort([1, 2]));
console.log(quickSort([100, 2, 0, 3, 1, 10, 20, 99]));
console.log(quickSort([5, 6, 0, 3, 101, 10, 15, 1999]));
