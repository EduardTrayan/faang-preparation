/**
 *
 * @param val
 * @param next
 * @constructor
 */
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val);
	this.next = (next===undefined ? null : next);
}

/**
 * Time: O(N)
 * Space: O(N)
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
	const l3 = new ListNode();
	
	let l1P = l1;
	let l2P = l2;
	let l3P = l3;
	
	let carry = 0;
	
	while(l1P !== null || l2P !== null) {
		const sum = (l1P ? l1P.val : 0) + (l2P ? l2P.val : 0) + carry;
		
		carry = Math.floor(sum / 10);
		
		l3P.next = new ListNode(sum % 10);
		
		l1P = l1P ? l1P.next : null;
		l2P = l2P ? l2P.next : null;
		l3P = l3P.next;
	}
	
	if (carry > 0) {
		l3P.next = new ListNode(carry);
	}
	
	return l3.next;
};

exports.addTwoNumbers = addTwoNumbers;
exports.ListNode = ListNode;
