/**
 * Time: O(N)
 * Space: O(1)
 *
 * @param array
 * @param sequence
 * @returns {boolean}
 */
function isValidSubsequence(array, sequence) {
	let arrayIndex = 0;
	let sequenceIndex = 0;
	
	while (arrayIndex < array.length && sequenceIndex < sequence.length) {
		if (array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++;
		
		arrayIndex++;
	}
	
	return sequenceIndex === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
