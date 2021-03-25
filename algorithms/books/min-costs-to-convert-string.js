const minCostToConvertStrings = (str1, str2, costs) => {
	const result = [];
	
	const l1 = str1.length;
	const l2 = str2.length;
	
	let i;
	let j;
	
	for (i = 0; i <= l1; i++) {
		result[i] = [];
		
		for (j = 0; j <= l2; j++) {
			result[i][j] = i === 0 ? j * costs.ins : 0;
		}
		
		result[i][0] = i * costs.del;
	}
	
	for (i = 1; i <= l1; i++) {
		for (j = 1; j <= l2; j++) {
			if (str1[i - 1] === str2[j - 1]) {
				result[i][j] = result[i - 1][j - 1] + costs.cop;
			} else {
				result[i][j] = result[i - 1][j - 1] + costs.rep;
			}
			
			result[i][j] = Math.min(
				result[i][j],
				result[i - 1][j] + costs.del,
				result[i][j - 1] + costs.ins,
			)
		}
	}
	
	console.log(result);
	
	return result[l1][l2];
}

console.log(minCostToConvertStrings(
	'ACAAGC',
	'CCGT',
	{
		cop: -1,
		rep: 1,
		del: 2,
		ins: 2
	}
))
