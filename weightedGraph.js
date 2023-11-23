class WeightedGraph {
    constructor() {
      this.vertices = new Map(); // Map to store vertices and their associated edges and weights
    }
  
    addVertex(vertex) {
      this.vertices.set(vertex, new Map());
    }
  
    addEdge(vertex1, vertex2, weight) {
      if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) {
        console.error('Vertex not found');
        return;
      }
  
      // Add edges and weights for both vertices
      this.vertices.get(vertex1).set(vertex2, weight);
      this.vertices.get(vertex2).set(vertex1, weight);
    }
  
    getNeighbors(vertex) {
      if (!this.vertices.has(vertex)) {
        console.error('Vertex not found');
        return;
      }
  
      // Return neighbors and their weights
      return this.vertices.get(vertex);
    }
  }
  
  // Example usage
  const weightedGraph = new WeightedGraph();
  
  weightedGraph.addVertex('A');
  weightedGraph.addVertex('B');
  weightedGraph.addVertex('C');
  
  weightedGraph.addEdge('A', 'B', 3);
  weightedGraph.addEdge('B', 'C', 5);
  weightedGraph.addEdge('A', 'C', 7);
  
  console.log(weightedGraph.getNeighbors('A')); // Map { 'B' => 3, 'C' => 7 }
  