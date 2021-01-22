const maxCommonStringsSubsequence = (str1, str2) => {
	const rows = str1.length;
	const cols = str2.length;
	
	let row;
	let col;
	
	let common = [];

	for (row = 0; row <= rows; row++) {
		common[row] = [];
		
		for (col = 0; col <= cols; col++) {
			common[row][col] = '';
		}
	}
	
	for (row = 1; row <= rows; row++) {
		for (col = 1; col <= cols; col++) {
			common[row][col] = str1[row - 1] === str2[col - 1]
				? common[row - 1][col - 1] + str1[row - 1]
				: (common[row - 1][col].length > common[row][col - 1].length ? common[row - 1][col] : common[row][col - 1]);
			
		}
	}

	return common[rows][cols];
}

console.log(maxCommonStringsSubsequence('CATCGA', 'GTACCGTCA'));
