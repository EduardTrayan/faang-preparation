const topologicalSort = (graph, n) => {
	let income = [];
	let next = [];
	let out = [];
	
	let i;
	let j;
	let node;
	let adj;
	
	for (i = 0; i <= n; i++) income[i] = 0;
	for (i = 0; i <= n; i++) {
		adj = graph[i];
		
		for (j in adj) {
			income[adj[j]] += 1;
		}
	}

	for (i = 0; i <= n; i++) {
		if (income[i] === 0) {
			next.push(i);
		}
	}

	while ((node = next.pop()) >= 0) {
		out.push(node);
		
		adj = graph[node];
		
		for (j in adj) {
			income[adj[j]] -= 1;
			if (income[adj[j]] === 0) {
				next.push(adj[j]);
			}
		}
	}
	
	return out;
}

// console.log(topologicalSort([
// 	[1],
// 	[2, 3, 4, 7],
// 	[5],
// 	[7],
// 	[8, 9],
// 	[6],
// 	[8, 9],
// 	[],
// 	[9],
// 	[]
// ], 9));

exports.topologicalSort = topologicalSort;
