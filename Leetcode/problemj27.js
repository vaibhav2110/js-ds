var numSquares = function (n) {
  let i = 1,
    j = 1;
  let solutions = [];
  let maxCount = 0;
  while (j <= n && j >= 1) {
    if (n % j === 0) {
      solutions.push(n / j);
      maxCount = Math.max(n / j, maxCount);
    } else {
      let a = Math.floor(n / j);
      let b = n % j;
      solutions.push(Math.floor(n / j));
      solutions.push(b);
    }
    i++;
    j = i * i;
  }
  console.log(solutions);
};

module.exports = () => console.log(numSquares(55));
