var uniquePaths = function (m, n) {
  if (m == 1 && n == 1) {
    return 1;
  }
  //let array = new Array(m)
  //return traverse(0, 0, m, n, [0]);
  return traverseDP(m, n);
};

var traverseDP = function(m, n){
  let dp = new Array(n).fill(1);
  for( let i = 0; i < n; i ++){
    dp[i] = new Array(m).fill(1);
  }
  for(let i = 1; i < n; i++){
    for(let j = 1; j < m; j++){
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }
  return dp[n-1][m-1];
}

var traverse = function (j, i, m, n, count) {
  if (i === n - 1 && j === m - 1) {
    count[0]++;
    return;
  }

  if (j + 1 < m) {
    traverse(j + 1, i, m, n, count);
  }
  if (i + 1 < n) {
    traverse(j, i + 1, m, n, count);
  }
  return count[0];
};

module.exports = () => console.log(uniquePaths(51, 9));
