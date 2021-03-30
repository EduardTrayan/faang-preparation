const insertSort = require('./insertSort');

const selectIthStatisticsLinear = (array, startIdx, endIdx, targetIdx) => {
	if (startIdx === endIdx) {
		return array[startIdx];
	}
	
	const parts = Math.floor(array.length / 5);
	
	const medians = [];
	
	for (let i = 0; i < parts; i++) {
		const start = i * 5;
		const end = (i * 5) + 4;
		
		insertSort.insertSort(array, start, end);
		
		medians.push(array[(end + start) / 2])
	}
	
	insertSort.insertSort(array, parts * 5, array.length - 1);
	const medianIdx = Math.floor(((array.length - 1) + (parts * 5)) / 2);
	
	medians.push(array[medianIdx]);
	
	const pivot = selectIthStatisticsLinear(medians, 0, medians.length - 1, Math.floor((medians.length - 1) / 2));
	const pivotIdx = partition(array, startIdx, endIdx, pivot);

	if (pivotIdx === targetIdx) {
		return array[targetIdx];
	} else if (targetIdx < pivotIdx) {
		return selectIthStatisticsLinear(array, startIdx, pivotIdx - 1, targetIdx);
	} else {
		return selectIthStatisticsLinear(array, pivotIdx + 1, endIdx, targetIdx);
	}
};

const swap = (array, i, j) => {
	const tmp = array[i];
	array[i] = array[j];
	array[j] = tmp;
}

const partition = (array, startIdx, endIdx, pivot) => {
	let rightIdx = startIdx;
	let pivotIdx = null;
	
	for (let i = startIdx; i <= endIdx; i++) {
		if (array[i] < pivot) {
			swap(array, i, rightIdx);
			rightIdx++;
		} else if (array[i] === pivot) {
			pivotIdx = i;
		}
	}
	
	swap(array, rightIdx, pivotIdx);
	
	return rightIdx;
};

console.log(selectIthStatisticsLinear([
	3,
	9,
	43,
	23,
	1,
	63,
	17
], 0, 6, 4));
console.log(selectIthStatisticsLinear([
	3,
	9,
	43,
	23,
	1,
	63,
	17
], 0, 6, 1));
console.log(selectIthStatisticsLinear([
	3,
	9,
	43,
	23,
	1,
	63,
	17
], 0, 6, 7));
