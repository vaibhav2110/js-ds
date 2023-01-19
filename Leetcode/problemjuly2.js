let Node = require("../BST/node").Node;

var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  } else {
    let output = [];
    return traverseAndFill(root, 0, output).reverse();
  }
};

var traverseAndFill = function (node, level, output) {
  if (output[level]) {
    output[level].push(node.data);
  } else {
    output[level] = [node.data];
  }
  if (node.leftChild) {
    traverseAndFill(node.leftChild, level + 1, output);
  }
  if (node.rightChild) {
    traverseAndFill(node.rightChild, level + 1, output);
  }
  return output;
};

function test() {
  let node1 = new Node(3);
  let node2 = new Node(9);
  let node3 = new Node(20);
  let node4 = new Node(15);
  let node5 = new Node(7);
  let node6 = new Node(17);
  node1.leftChild = node2;
  node1.rightChild = node3;
  node2.leftChild = node6;
  node3.leftChild = node4;
  node3.rightChild = node5;
  return levelOrderBottom(node1);
}

module.exports = () => console.log(test());
