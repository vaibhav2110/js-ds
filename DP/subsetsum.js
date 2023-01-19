function subsetSumRecur(arr, sum, n) {
  if (sum === 0) {
    return true;
  } else if (n === 0) {
    return false;
  }
  if (arr[n - 1] <= sum) {
    return (
      subsetSumRecur(arr, sum - arr[n - 1], n - 1) ||
      subsetSumRecur(arr, sum, n - 1)
    );
  } else {
    return subsetSumRecur(arr, sum, n - 1);
  }
}

function subsetSumDP(arr, sum, n) {
  let dp = new Array(n + 1).fill().map((_) => new Array(sum + 1).fill(false));
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= sum; j++) {
      if (i === 0) {
        dp[i][j] = false;
      }
      if (j === 0) {
        dp[i][j] = true;
      }
    }
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (arr[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j - arr[i - 1]] || dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][sum];
}

let arr = [3, 34, 4, 12, 5, 2];
let sum = 30;
console.log(subsetSumDP(arr, sum, arr.length));
