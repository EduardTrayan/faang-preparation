const selectIthStatisticsRandomized = (array, targetIdx) => {
	return traverse(array, 0, array.length - 1, targetIdx);
};

const swap = (array, i, j) => {
	const tmp = array[i];
	array[i] = array[j];
	array[j] = tmp;
}

const partition = (array, startIdx, endIdx) => {
	const pivotIdx = Math.floor(Math.random() * (endIdx - startIdx + 1)) + startIdx;
	
	swap(array, pivotIdx, endIdx);
	
	const pivot = array[endIdx];
	
	let rightIdx = startIdx;
	
	for (let i = startIdx; i < endIdx; i++) {
		if (array[i] < pivot) {
			swap(array, i, rightIdx);
			rightIdx++;
		}
	}

	swap(array, rightIdx, endIdx);
	
	return rightIdx;
};

const traverse = (array, startIdx, endIdx, targetPosition) => {
	if (startIdx === endIdx) {
		return array[startIdx];
	}
	
	const pivotIdx = partition(array, startIdx, endIdx);
	const k = pivotIdx - startIdx + 1;
	
	if (pivotIdx === targetPosition) {
		return array[pivotIdx];
	} else if (targetPosition < pivotIdx) {
		return traverse(array, startIdx, pivotIdx - 1, targetPosition);
	} else {
		return traverse(array, pivotIdx + 1, endIdx, targetPosition);
	}
};

console.log(selectIthStatisticsRandomized([
	3,
	9,
	43,
	23,
	1,
	63,
	17
], 4));
console.log(selectIthStatisticsRandomized([
	3,
	9,
	43,
	23,
	1,
	63,
	17
], 0));
console.log(selectIthStatisticsRandomized([
	3,
	9,
	43,
	23,
	1,
	63,
	17
], 6));
