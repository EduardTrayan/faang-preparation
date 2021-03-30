const insertSort = (arr, start, end) => {
	const l = end - start + 1;
	let cache;
	
	if (l < 2) {
		return arr;
	}
	
	if (arr[start + 1] < arr[start]) {
		const tmp = arr[start + 1];
		arr[start + 1] = arr[start];
		arr[start] = tmp;
	}
	
	for (let i = start + 2; i < l; i++) {
		cache = arr[i];
		let j = i - 1;
		
		while (j >=0 && arr[j] > cache) {
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = cache;
	}
	
	return arr;
};

// console.log(insertSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 0, 9));
// console.log(insertSort([2, 1], 0, 1));
// console.log(insertSort([1, 2, 3], 0, 2));
// console.log(insertSort([100, 2, 300, 0, 1000], 0, 4));

exports.insertSort = insertSort;
