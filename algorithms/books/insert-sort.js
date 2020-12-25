const insertSort = arr => {
	const l = arr.length;
	let cache;
	
	if (l < 2) {
		return arr;
	}
	
	if (arr[1] < arr[0]) {
		const tmp = arr[1];
		arr[1] = arr[0];
		arr[0] = tmp;
	}
	
	for (let i = 2; i < l; i++) {
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

console.log(insertSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(insertSort([2, 1]));
console.log(insertSort([1, 2, 3]));
console.log(insertSort([100, 2, 300, 0, 1000]));
