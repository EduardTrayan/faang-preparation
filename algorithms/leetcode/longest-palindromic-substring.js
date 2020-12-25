/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
	let max = 0;
	let start = 0;
	
	const l = s.length;
	
	if (l < 2) return s;
	
	const findLongestPalindrome = (s, j, k) => {
		while (j >= 0 && k < l && s[j] === s[k]) {
			j--;
			k++;
		}
		
		if (max < k - j -1) {
			start = j + 1;
			max = k - j - 1;
		}
	}
	
	for (let i = 0; i < l-1; i++) {
		findLongestPalindrome(s, i, i);
		findLongestPalindrome(s, i, i+1);
	}
	
	return s.substr(start, max);
};

exports.longestPalindrome = longestPalindrome;
