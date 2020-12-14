const answers = require('../../../algorithms/algoexpert/twonumbersum');
const chai = require('chai');

describe('Test two numbers sum', function() {
	const tests = [
		{array: [3, 5, -4, 8, 11, 1, -1, 6], targetSum: 10,  expected: [11, -1]},
	];
	
	tests.forEach(function(test) {
		it('Correctly works for [' + test.array + '] array', function() {
			const basicOutput = answers.twoNumberSum(test.array, test.targetSum);
			const advancedOutput = answers.twoNumberSumAdvanced(test.array, test.targetSum);
			
			chai.expect(test.expected).to.include.members(basicOutput);
			chai.expect(test.expected).to.include.members(advancedOutput);
		});
	});
});
