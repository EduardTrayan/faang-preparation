const data = require('../data/data');

/**
 * T: O(nlgn)
 * S: O(n)
 *
 *
 * @param graph
 * @param n
 * @param weights
 * @param s
 * @returns {[]}
 */
const shortestPathDijkstra = (graph, n, weights, s) => {
	let shortest = [];
	let queue = [];
	
	let node;
	let adjNode;
	let i;
	let j;
	
	for (i = 0; i <= n; i++) {
		shortest[i] = Infinity;
		queue[i] = Infinity;
	}
	
	shortest[s] = 0;
	queue[s] = 0;
	
	while ((node = getNodeIndexWithShortestPath(queue, n)) > -1) {
		for (j in graph[node]) {
			adjNode = graph[node][j];
			
			if (shortest[node] + weights[node][adjNode] < shortest[adjNode]) {
				shortest[adjNode] = shortest[node] + weights[node][adjNode];
				decreaseNodeShortestPath(queue, adjNode, shortest[adjNode]);
			}
		}
	}
	
	return shortest;
}

const getNodeIndexWithShortestPath = (queue, n) => {
	let min = Infinity;
	let index = -1;
	
	for (let i = 0; i <= n; i++) {
		if (queue[i] === -1) continue;
		
		if (queue[i] < min) {
			min = queue[i];
			index = i;
		}
	}
	
	if (index > -1) queue[index] = -1;

	return index;
}

const decreaseNodeShortestPath = (queue, index, newPath) => {
	queue[index] = newPath;
}

console.log(shortestPathDijkstra(data.graph, 9, data.weights, 0));
