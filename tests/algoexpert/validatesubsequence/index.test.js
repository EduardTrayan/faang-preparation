const answers = require('../../../algoexpert/validatesubsequence');
const chai = require('chai');

describe('Test validate subsequence', function() {
	const tests = [
		{array: [3, 5, -4, 8, 11, 1, -1, 6], sequence: [3, 8, -1],  expected: true},
	];
	
	tests.forEach(function(test) {
		it('Correctly works for [' + test.array + '] array', function() {
			const output = answers.isValidSubsequence(test.array, test.sequence);
			
			chai.expect(output).to.eq(test.expected);
		});
	});
});
