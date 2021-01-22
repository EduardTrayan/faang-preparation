const data = require('../data/data');

/**
 * T: O(n^3)
 * S: (n^3)
 *
 * @param matrix
 * @returns {*}
 */
const shortestPathFloydWarshall = matrix => {
	let shortest = matrix;
	const n = matrix.length;
	
	for (let k = 0; k < n; k++) {
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				shortest[i][j] = Math.min(shortest[i][j], shortest[i][k] + shortest[k][j]);
			}
		}
	}
	
	return shortest;
};

console.log(shortestPathFloydWarshall(data.graphMatrix));
