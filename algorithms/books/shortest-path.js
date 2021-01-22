const topologicalSort = require('./topologicalSort');
const data = require('../data/data');

const shortestPath = (graph, n, weights, s) => {
	const path = topologicalSort.topologicalSort(graph, n);
	
	let shortest = [];
	
	let i;
	let j;
	let node;
	let adjNode;
	
	for (i = 0; i <= n; i++) shortest[i] = Infinity;
	
	shortest[s] = 0;
	
	for (i in path) {
		node = path[i];
		
		for (j in graph[node]) {
			adjNode = graph[node][j];
			
			if (shortest[node] + weights[node][adjNode] < shortest[adjNode]) {
				shortest[adjNode] = shortest[node] + weights[node][adjNode];
			}
		}
	}
	
	return shortest;
}

console.log(shortestPath(data.graph, 9, data.weights, 0));
