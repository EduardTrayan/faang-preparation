const mergeSort = arr => {
	if (arr.length < 2) return arr;
	
	sort(arr, 0, arr.length - 1);
	
	return arr;
}

const sort = (arr, l, r) => {
	if (l >= r) return;
	
	const q = Math.floor((l + r) / 2);
	
	sort(arr, l, q);
	sort(arr, q + 1, r);
	
	merge(arr, l, r, q);
}

const merge = (arr, l, r, q) => {
	let a = [];
	let b = [];
	
	for (let i = l; i <= r; i++) {
		if (i <= q) a.push(arr[i]);
		else b.push(arr[i]);
	}
	
	const aLen = a.length;
	const bLen = b.length;
	
	let k = 0;
	let j = 0;
	let i = l;
	
	while (k < aLen || b < bLen || i <= r) {
		if (k < a.length && j < b.length) {
			if (a[k] < b[j]) {
				arr[i] = a[k++];
			} else {
				arr[i] = b[j++];
			}
		} else if (k < a.length) {
			arr[i] = a[k++];
		} else if (j < b.length) {
			arr[i] = b[j++];
		}
		
		i++;
	}
}

console.log(mergeSort([3, 2, 1]));
console.log(mergeSort([2, 1]));
console.log(mergeSort([1, 2]));
console.log(mergeSort([100, 2, 0, 3, 1, 10, 20, 99]));
