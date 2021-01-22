function numberOfWaysToMakeChange(n, denoms) {
	if (n === 0) return 1;
	
	let i;
	let coin;
	let ways = [];
	
	for (i = 0; i <= n; i++) ways[i] = 0;
	
	ways[0] = 1;
	
	for (i = 0; i < denoms.length; i++) {
		coin = denoms[i];
		
		for (let j = 0; j <= n; j++) {
			if (coin <= j) {
				ways[j] += ways[j - coin];
			}
		}
	}
	
	return ways[n];
}

console.log(numberOfWaysToMakeChange(9, [1, 2, 3, 4, 5]))

const edits = [];

const str1 = 'abd';
const str2 = 'aced';

for (let i = 0; i < str2.length + 1; i++) {
	const row = [];
	
	for (let j = 0; j < str1.length + 1; j++) {
		row.push(j);
	}
	
	row[0] = i;
	edits.push(row);
}

console.log(edits);
