var sumNumbers = function (root) {
  if (!root) {
    return 0;
  }
  return findSum(root, "", sum);
};

var findSum = function (node, currentNum, currentSum) {
  if (!node.left && !node.right) {
    currentSum += Number(currentNum);
  }
  if (node.left) {
    findSum(node, currentNum + node.val, currentSum);
  }
  if (node.right) {
    findSum(node, currentNum + node.val, currentSum);
  }
  return currentSum;
};

module.exports = () => console.log(sumNumbers(root));
