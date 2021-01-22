const graph = [
	[1],
	[2, 3, 4, 7],
	[1, 5],
	[7],
	[8, 9],
	[6],
	[8, 9],
	[],
	[9],
	[]
];

const weights = [
	[null, 1],
	[null, null, 2, 3, 4, null, null, 7],
	[null, 3, null, null, null, 5],
	[null, null, null, null, null, null, null, 2],
	[null, null, null, null, null, null, null, null, 1, 2],
	[null, null, null, null, null, null, 5],
	[null, null, null, null, null, null, null, null, 2, 3],
	[],
	[null, null, null, null, null, null, null, null, null, -10],
];

exports.graph = graph;
exports.weights = weights;
exports.weightsNegativeCycle = [
	[null, 1],
	[null, null, 2, 3, 4, null, null, 7],
	[null, -10, null, null, null, 5],
	[null, null, null, null, null, null, null, 2],
	[null, null, null, null, null, null, null, null, 1, 2],
	[null, null, null, null, null, null, 5],
	[null, null, null, null, null, null, null, null, 2, 3],
	[],
	[null, null, null, null, null, null, null, null, null, -10],
];

exports.graphMatrix = [
	[0, 3, 8, Infinity],
	[Infinity, 0, Infinity, 1],
	[Infinity, 4, 0, Infinity],
	[2, Infinity, -5, 0],
];
