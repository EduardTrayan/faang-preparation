const topologicalSort = require('./topologicalSort');

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

console.log(shortestPath([
	[1],
	[2, 3, 4, 7],
	[5],
	[7],
	[8, 9],
	[6],
	[8, 9],
	[],
	[9],
	[]
], 9, [
	[null, 1],
	[null, null, 2, 3, 4, null, null, 7],
	[null, null, null, null, null, 5],
	[null, null, null, null, null, null, null, 2],
	[null, null, null, null, null, null, null, null, 1, 2],
	[null, null, null, null, null, null, 5],
	[null, null, null, null, null, null, null, null, 2, 3],
	[],
	[null, null, null, null, null, null, null, null, null, -10],
], 0));

console.log(shortestPathDijkstra([
	[1],
	[2, 3, 4, 7],
	[5],
	[7],
	[8, 9],
	[6],
	[8, 9],
	[],
	[9],
	[]
], 9, [
	[null, 1],
	[null, null, 2, 3, 4, null, null, 7],
	[null, null, null, null, null, 5],
	[null, null, null, null, null, null, null, 2],
	[null, null, null, null, null, null, null, null, 1, 2],
	[null, null, null, null, null, null, 5],
	[null, null, null, null, null, null, null, null, 2, 3],
	[],
	[null, null, null, null, null, null, null, null, null, -10],
], 0));
