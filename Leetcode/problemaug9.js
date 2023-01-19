var orangesRotting = function (grid) {
  let rottenCoords = [];
  let freshOranges = false;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        rottenCoords.push([i, j]);
      }
      if (grid[i][j] === 1) {
        freshOranges = true;
      }
    }
  }
  if (!freshOranges) {
    return 0;
  }
  if (rottenCoords.length === 0) {
    return 0;
  }
  let visited = new Set();
  let maxTime = [0];
  for (let i = 0; i < rottenCoords.length; i++) {
    dfs(grid, rottenCoords[i][0], rottenCoords[i][1], 0, visited, maxTime);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }
  return maxTime[0];
};

var dfs = (grid, i, j, min, visited, maxTime) => {
  if (
    i >= grid.length ||
    j >= grid[0].length ||
    i < 0 ||
    j < 0 ||
    visited.has(`${i}${j}`)
  ) {
    return;
  }
  dfs(grid, i - 1, j, min + 1, visited, maxTime);
  dfs(grid, i, j - 1, min + 1, visited, maxTime);
  dfs(grid, i + 1, j, min + 1, visited, maxTime);
  dfs(grid, i, j + 1, min + 1, visited, maxTime);
  if (grid[i][j] === 1) {
    grid[i][j] = 2;
    visited.add(`${i}${j}`);
    maxTime[0] = Math.max(maxTime[0], min);
  }
};

module.exports = () =>
  console.log(
    orangesRotting([
      [1,2,1,2]
    ])
  );
