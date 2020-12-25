/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
	const l = s.length;
	let i = 0;
	let result = [];
	let res = '';
	
	for (let x = 0; x < numRows; x++) {
		result[x] = '';
	}
	
	while (i < l) {
		for (let k = numRows - 1; k >= 0 && i < l; k--) {
			result[k] += '' + s[i++];
		}
		for (let j = 1; j <= numRows - 2 && i < l; j++) {
			result[j] += '' + s[i++];
		}
	}
	
	for (let a = numRows - 1; a >= 0; a--) {
		res += '' + result[a];
	}
	
	return res;
};

exports.convert = convert;
