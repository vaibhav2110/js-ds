var islandPerimeter = function (grid) {
  let [i, j] = findStartingPoint(grid);
  let visitedArr = new Array(grid.length).fill(0);
  visitedArr = visitedArr.map((_) => new Array(grid.length).fill(0));
  return traverse(grid, i, j, [0], visitedArr);
};

var findStartingPoint = (grid) => {
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid.length; colIndex++) {
      if (grid[rowIndex][colIndex] === 1) {
        return [rowIndex, colIndex];
      }
    }
  }
  return [0, 0];
};

var traverse = (grid, i, j, perimeter, visitedArr) => {
  if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0) {
    return perimeter[0];
  }
  if (grid[i][j] === 0) {
    return perimeter[0];
  }
  if (visitedArr[i][j]) {
    return perimeter[0];
  }
  visitedArr[i][j] = 1;
  if (!grid[i - 1] || grid[i - 1][j] === 0) {
    perimeter[0]++;
  }
  if (!grid[i + 1] || grid[i + 1][j] === 0) {
    perimeter[0]++;
  }
  if (!grid[i][j - 1] || grid[i][j - 1] === 0) {
    perimeter[0]++;
  }
  if (!grid[i][j + 1] || grid[i][j + 1] === 0) {
    perimeter[0]++;
  }
  traverse(grid, i + 1, j, perimeter, visitedArr);
  traverse(grid, i, j + 1, perimeter, visitedArr);
  traverse(grid, i, j - 1, perimeter, visitedArr);
  traverse(grid, i - 1, j, perimeter, visitedArr);
  return perimeter[0];
};

module.exports = () =>
  console.log(
    islandPerimeter([
      [0, 1],
    ])
  );
