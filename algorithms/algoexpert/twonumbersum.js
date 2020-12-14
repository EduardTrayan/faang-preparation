/**
 * Time: O(N)
 * Space: O(N)
 *
 * @param array
 * @param targetSum
 * @returns {*[]}
 */
function twoNumberSum(array, targetSum) {
	let hash = {};
	
	for (let i = 0; i < array.length; i++) {
		const currentNumber = array[i];
		const diff = targetSum - currentNumber;

		if (hash[diff]) {
			return [
				diff,
				currentNumber,
			];
		}
		
		hash[currentNumber] = true;
	}
	
	return [];
}

/**
 * Time: O(N)
 * Space: O(N)
 *
 * @param array
 * @param targetSum
 * @returns {*[]}
 */
function twoNumberSumAdvanced(array, targetSum) {
	const sorted = array.sort((a, b) => a - b);
	let left = 0;
	let right = sorted.length - 1;
	
	while (left < right) {
		const currentSum = sorted[left] + sorted[right];
		
		if (currentSum === targetSum) {
			return [
				sorted[left],
				sorted[right]
			]
		} else if (currentSum < targetSum) {
			left++;
		} else if (currentSum > targetSum) {
			right++;
		}
	}
	
	return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
exports.twoNumberSumAdvanced = twoNumberSumAdvanced;
