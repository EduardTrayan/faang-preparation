const data = require('../data/data');

/**
 * T:
 *  - O(n^2) for array data structure
 *  - O(nlgn) for BST
 *
 * @param graph
 * @param n
 * @param weights
 * @param s
 * @returns {any[]|boolean}
 */
const shortestPathBellmanFord = (graph, n, weights, s) => {
	let shortest = (new Array(n + 1)).fill(Infinity);
	
	shortest[s] = 0;
	
	for (let node = 0; node < n; node++) {
		const adjNodes = graph[node];
		
		for (let adjNode of adjNodes) {
			shortest[adjNode] = Math.min(shortest[adjNode], shortest[node] + weights[node][adjNode]);
		}
	}
	
	for (let node = 0; node < n; node++) {
		const adjNodes = graph[node];
		
		for (let adjNode of adjNodes) {
			if (shortest[node] + weights[node][adjNode] < shortest[adjNode]) {
				return false;
			}
		}
	}
	
	return shortest;
};

console.log(shortestPathBellmanFord(data.graph, 9, data.weights, 0));
console.log(shortestPathBellmanFord(data.graph, 9, data.weightsNegativeCycle, 0));
