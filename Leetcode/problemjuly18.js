const vertex = require("../Graph/vertex");

var findOrder = function (numCourses, prerequisites) {
  if (numCourses > 0 && prerequisites.length === 0) {
    let output = [];
    for (let i = numCourses - 1; i >= 0; i--) {
      output.push(i);
    }
    //console.log(output);
    return output;
  }
  let graph = {};
  for (let i = 0; i < prerequisites.length; i++) {
    if (graph[prerequisites[i][1]]) {
      graph[prerequisites[i][1]].push(prerequisites[i][0]);
    } else {
      graph[prerequisites[i][1]] = [prerequisites[i][0]];
    }
  }
  let ts = topologicalSort(numCourses, graph);
  console.log(21, ts);
  if (ts === -1) {
    return [];
  }
  if (ts.length === numCourses) {
    return ts;
  }
  let output = [];
  for (let i = numCourses - 1; i >= 0; i--) {
    if (!ts.includes(i)) {
      output.push(i);
    }
  }
  return [...output, ...ts];
};

var topologicalSort = (numCourses, graph) => {
  let prevOutput = [];
  for (let vertex in graph) {
    let visited = new Set();
    let visiting = new Set();
    let stack = [];
    let currentOutput = topologicalDFS(
      Number(vertex),
      graph,
      visited,
      visiting,
      stack
    );
    //console.log(currentOutput);
    if (currentOutput === -1) {
      return -1;
    }
    for(let i = 0; i < currentOutput.length; i++){
        if(!prevOutput.includes(currentOutput[i])){
            prevOutput.push(currentOutput[i]);
        }
    }
    // if (currentOutput.length > output.length) {
    //   output = currentOutput;
    // }
    // if (output.length === numCourses) {
    //   return output.reverse();
    // }
  }
  //console.log(prevOutput.reverse());
  return prevOutput.reverse();
};

var topologicalDFS = (vertex, graph, visited, visiting, stack) => {
  if (stack.includes(-1)) {
    return -1;
  }
  visiting.add(vertex);
  visited.add(vertex);
  if (graph[vertex]) {
    for (let neighbour of graph[vertex]) {
      if (visiting.has(neighbour)) {
        console.log("Cycle detected");
        stack.push(-1);
        return -1;
      }
      if (!visited.has(neighbour)) {
        visited.add(vertex);
        topologicalDFS(neighbour, graph, visited, visiting, stack);
      }
    }
  }
  visiting.delete(vertex);
  stack.push(vertex);
  //console.log(stack);
  return stack.includes(-1) ? -1 : stack;
};
module.exports = () =>
  console.log(
    findOrder(4, [[1,0],[2,0],[3,1],[3,2]])
  );
