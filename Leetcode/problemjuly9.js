let Node = require("../BST/node").Node;

var widthOfBinaryTree = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.leftChild && !root.rightChild) {
    return 1;
  }
  let outputs = levelTraversal(root, 0, 1, []);
  let max = 0;
  outputs.forEach(output => {
    max = Math.max(output[output.length - 1] - output[0] + 1, max);
  })
  console.log(outputs, max);
  return max;
};

var levelTraversal = (node, level, pos, outputs) => {
  if (outputs[level]) {
    outputs[level].push(pos);
  } else {
    outputs[level] = [pos];
  }
  if(node.leftChild){
    levelTraversal(node.leftChild, level + 1, 2 * pos, outputs);
  }
  if(node.rightChild){
    levelTraversal(node.rightChild, level + 1, 2 * pos + 1,  outputs);
  }
  return outputs;
};

function test() {
  let node1 = new Node(1);
  let node3 = new Node(3);
  let node2 = new Node(2);
  let node5 = new Node(5);
  let node9 = new Node(9);
  let node6 = new Node(6);
  let node10 = new Node(10);
  node1.leftChild = node3;
  node1.rightChild = node2;
  node3.leftChild = node5;
  node2.rightChild = node9;
  node9.rightChild = node10;
  //   node3.rightChild = node5;
  node5.leftChild = node6;
  return widthOfBinaryTree(node1);
}

module.exports = () => console.log(test());
