const answers = require('../../../algorithms/leetcode/addtwonumbers');
const chai = require('chai');

const convertArrayToList = (array) => {
	const initial = new answers.ListNode();
	
	array.reduce((accumulator, currentValue) => {
		accumulator.next = new answers.ListNode(currentValue);
		
		return accumulator.next;
	}, initial);
	
	return initial.next;
};

const convertListToArray = (list) => {
	let p = list;
	let array = [];
	
	while (p !== null) {
		array.push(p.val);
		
		p = p.next;
	}
	
	return array;
};

describe('Validate leetcode addtwonumbers', function() {
	const tests = [
		{l1: convertArrayToList([2,4,3]), l2: convertArrayToList([5,6,4]), expected: [7,0,8]},
	];
	
	tests.forEach(function(test) {
		it('Correctly works', function() {
			const output = answers.addTwoNumbers(test.l1, test.l2);

			chai.expect(convertListToArray(output)).to.include.members(test.expected);
		});
	});
});
