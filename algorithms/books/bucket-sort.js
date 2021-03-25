class Node {
	next = null;
	value = null;
	
	constructor(value) {
		this.value = value;
	}
}
class LinkedList {
	head = null;
	
	insert(value) {
		const node = new Node(value);
		
		let prev = null;
		let cur = this.head;
		
		while (cur !== null && cur.value < value) {
			prev = cur;
			cur = cur.next;
		}
		
		if (prev === null) {
			this.head = node;
			this.head.next = cur;
		} else {
			prev.next = node;
			node.next = cur;
		}
	}
	
	append(out) {
		let node = this.head;
		
		while (node !== null) {
			out.push(node.value);
			
			node = node.next;
		}
	}
}

const bucketSort = array => {
	const n = array.length;
	const buckets = array.map(_ => new LinkedList());
	
	for (const value of array) {
		const bucketId = Math.floor(n * value);
		
		buckets[bucketId].insert(value);
	}
	
	return buckets.reduce((accumulator, bucket) => {
		bucket.append(accumulator);
		
		return accumulator;
	}, []);
}

console.log(bucketSort([
	0.90,
	0.86,
	0.98,
	0.01,
	0.66,
	0.53,
	0.57,
	0.35,
	0.76,
	0.08,
	0.23,
	0.34,
	0.45
]))
