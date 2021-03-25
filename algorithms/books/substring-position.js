const buildFST = (text, string) => {
	const uniqueChars = [...new Set(string)];
	const fst = {};
	
	for (let char of uniqueChars) {
		fst[char] = [];
	}
	
	const n = text.length;
	
	for (let char in fst) {
		for (let state = 0; state < n; state++) {
			const p = text.substring(0, state) + char;
			
			let i = Math.min(p.length, n) - 1;
			
			while (!isSuffix(text, i, p)) {
				i--;
			}
			
			fst[char][state] = i + 1;
		}
		
		fst[char][n] = fst[char][0];
	}
	
	return fst;
}

const isSuffix = (text, i, p) => {
	let n = p.length - 1;
	
	while (i >= 0) {
		if (text[i] !== p[n]) {
			return false;
		} else {
			i--;
			n--;
		}
	}
	
	return true;
}

const findSubstringPositions = (text, string) => {
	const positions = [];
	
	const fst = buildFST(text, string);
	const n = text.length;

	let state = 0;
	
	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		
		state = fst[char][state];
		
		if (n === state) {
			positions.push(i - n + 1)
		}
	}
	
	return positions;
}

console.log(findSubstringPositions('AAC', 'GTAACAGTAAACG'));
console.log(findSubstringPositions('AAC', 'BBAAB'));
