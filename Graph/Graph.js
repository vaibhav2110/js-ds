let Vertex = require("./vertex").Vertex;

function breadthFirstSearch(vertex) {
  let queue = [];
  vertex.visited = true;

  queue.push(vertex);
  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current.data);
    for (let neighbour of current.neighbours) {
      if (!neighbour.visited) {
        neighbour.visited = true;
        queue.push(neighbour);
      }
    }
  }
}

function depthFirstSearch(vertex) {
  let stack = [];
  stack.push(vertex);
  vertex.visited = true;

  while (stack.length !== 0) {
    let current = stack.pop();
    console.log(current.data);
    for (let neighbour of current.neighbours.reverse()) {
      if (!neighbour.visited) {
        neighbour.visited = true;
        stack.push(neighbour);
      }
    }
  }
}

function depthFirstSearchRecursive(vertex) {
  vertex.visited = true;
  console.log(vertex.data);

  for (let neighbour of vertex.neighbours) {
    if (!neighbour.visited) {
      depthFirstSearchRecursive(neighbour);
    }
  }
}

function topoLogicalSort(vertex, stack) {
  vertex.visited = true;
  for (let neighbour of vertex.neighbours) {
    if (!neighbour.visited) {
      topoLogicalSort(neighbour, stack);
    }
  }
  stack.push(vertex.data);
  return stack;
}

function graphTest() {
  let vA = new Vertex("A", false, []);
  let vB = new Vertex("B", false, []);
  let vC = new Vertex("C", false, []);
  let vD = new Vertex("D", false, []);
  let vE = new Vertex("E", false, []);
  let vF = new Vertex("F", false, []);
  let vG = new Vertex("G", false, []);

  vA.neighbours = [vB, vF, vC];
  vB.neighbours = [vA, vD, vE];
  vC.neighbours = [vA, vG];
  vD.neighbours = [vB];
  vE.neighbours = [vB];
  vF.neighbours = [vA];
  vG.neighbours = [vC];

  //breadthFirstSearch(vA);
  //depthFirstSearch(vA);
  //depthFirstSearchRecursive(vA);
  let sortedArr = topoLogicalSort(vA, []);
  while(sortedArr.length !== 0){
    console.log(sortedArr.pop());
  }
}

module.exports = () => graphTest();
