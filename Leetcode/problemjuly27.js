class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var buildTree = function (inorder, postorder) {
  if (!inorder.length && !postorder.length) {
    return null;
  }
  return buildTreeRecur(inorder, postorder, 0, inorder.length - 1, [postorder.length - 1]);
};

var buildTreeRecur = function (inorder, postorder, start, end, currIndex) {
  if (start > end) {
    return null;
  }
  let currNode = new Node(postorder[currIndex[0]--]);
  if (start === end) {
    return currNode;
  }
  let index = findIndex(currNode.val, inorder, start, end);
  currNode.right = buildTreeRecur(inorder, postorder, index + 1, end, currIndex);
  currNode.left = buildTreeRecur(inorder, postorder, start, index - 1, currIndex);
  return currNode;
};

var findIndex = function (value, array, start, end) {
  for(let i = start; i <= end; i++){
      if(value === array[i]){
          return i;
      }
  }
  return -1;
};

module.exports = () =>
  console.log(buildTree([4, 8, 2, 5, 1, 6, 3, 7], [8, 4, 5, 2, 6, 7, 3, 1]));
