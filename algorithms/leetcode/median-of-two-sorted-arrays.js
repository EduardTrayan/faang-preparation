/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
	const {A, B} = nums1.length > nums2.length ? {A: nums2, B: nums1} : {A: nums1, B: nums2};
	
	const m = A.length;
	const n = B.length;
	
	let i, j = 0;
	
	let iMin = 0;
	let iMax = m;
	
	const helper = Math.floor((m + n + 1) / 2);
	
	while(iMin <= iMax) {
		i = Math.floor((iMin + iMax) / 2);
		j = helper - i;
		
		if (i < m && A[i] < B[j-1]) {
			iMin = i + 1;
		} else if (i > 0 && A[i-1] > B[j]) {
			iMax = i - 1;
		} else {
			const leftMax = i === 0
				? B[j-1]
				: (j === 0 ? A[i-1] : Math.max(A[i-1], B[j-1]));
			
			if ((m + n) % 2 > 0) return leftMax;
			
			const rightMin = i === m
				? B[j]
				: (j === n ? A[i] : Math.min(A[i], B[j]));
			
			return (leftMax + rightMin) / 2;
		}
	}
	
	return 0;
};

exports.findMedianSortedArrays = findMedianSortedArrays;
