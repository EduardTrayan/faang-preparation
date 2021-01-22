class BinaryHeap {
	array = []
	
	len() {
		return this.array.length;
	}
	
	insert(value) {
		this.array.push(value);
		
		let n = this.len() - 1;
		let parent;
		
		while (n > 0) {
			parent = Math.floor((n - 1) / 2);
			
			if (this.array[n] < this.array[parent]) {
				const tmp = this.array[n];
				this.array[n] = this.array[parent];
				this.array[parent] = tmp;
				
				n = parent;
			} else {
				break;
			}
		}
	}
	
	getMin() {
		const min = this.array[0];
		
		this.array[0] = this.array.pop();
		
		let n = 0;
		const l = this.len();
		
		while ((2 * n) + 1 < l) {
			let left = this.array[(2 * n) + 1];
			let right = (2 * n) + 2 < l ? this.array[(2 * n) + 2] : Infinity;
			
			let min = Math.min(left, right);
			
			if (this.array[n] > min) {
				if (min === left) {
					this.array[(2 * n) + 1] = this.array[n];
					this.array[n] = min;
					n = (2 * n) + 1;
				} else {
					this.array[(2 * n) + 2] = this.array[n];
					this.array[n] = min;
					n = (2 * n) + 2;
				}
			} else {
				break;
			}
		}
		
		return min;
	}
	
	print() {
		console.log(this.array);
	}
}

const bh = new BinaryHeap();

for (let i of [1, 2, 3, 4, 5, 6, 7]) {
	bh.insert(i);
}

bh.print();
bh.insert(0);
bh.print();
console.log(bh.getMin());
bh.print();
