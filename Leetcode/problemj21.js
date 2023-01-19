var calculateMinimumHP = function (dungeon) {
  if (dungeon.length === 0) {
    return;
  }
  let initialEstimate = 1;
  return backtrack(dungeon, 0, 0, initialEstimate, 0);
};

var outputs = [];

var backtrack = function (dungeon, i, j, estimate, currentSum) {
  
  if (dungeon[i][j] < 0) {
    estimate += Math.abs(dungeon[i][j]);
    //currentSum += dungeon[i][j];
  } else {
    //estimate -= Math.abs(dungeon[i][j]);
    currentSum += dungeon[i][j];
  }
  if(i === dungeon.length - 1 && j === dungeon[0].length - 1){
    let output = dungeon[i][j] >= 0 ? estimate : estimate + dungeon[i][j];
    outputs.push(output);
    return outputs;
  }
  if (j + 1 <= dungeon[0].length - 1) {
    backtrack(dungeon, i, j + 1, estimate, currentSum);
  }
  if (i + 1 <= dungeon.length - 1) {
    backtrack(dungeon, i + 1, j, estimate, currentSum);
  }
  return outputs;
};

module.exports = () =>
  console.log(
    calculateMinimumHP([
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -15],
    ])
  );
