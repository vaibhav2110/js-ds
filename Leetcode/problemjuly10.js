// Definition for a Node.
class Node {
  constructor(val, prev, next, child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
  }
}

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) {
    return null;
  }
  recursivelyFlatten(head);
  console.log(head);
};

var recursivelyFlatten = (node) => {
  while (node.next) {
    if (node.child) {
      let nextNode = node.next;
      node.next = node.child;
      node.child.prev = node;
      if (nextNode) {
        nextNode.prev = recursivelyFlatten(node.child);
        nextNode.prev.next = nextNode;
      } else {
        recursivelyFlatten(node.child);
      }
      node.child = null;
    }
    node = node.next;
  }
  if (!node.next && node.child) {
    if (node.child) {
      node.next = node.child;
      node.child.prev = node;

      recursivelyFlatten(node.child);

      node.child = null;
    }
    node = node.child;
  }
  return node;
};

function test() {
  let node1 = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(3);
  let node4 = new Node(4);
  let node5 = new Node(5);
  let node6 = new Node(6);
  let node7 = new Node(7);
  let node8 = new Node(8);
  let node9 = new Node(9);
  let node10 = new Node(10);
  let node11 = new Node(11);
  let node12 = new Node(12);
  node1.next = node2;
  node2.prev = node1;
  node2.next = node3;
  node3.prev = node2;
  node3.next = node4;
  //node1.child = node2;
  //node2.child = node3;
  node3.child = node7;
  node4.next = node5;
  node4.prev = node3;
  node5.prev = node4;
  node5.next = node6;
  node6.prev = node5;
  node7.next = node8;
  node8.prev = node7;
  node8.child = node11;
  node8.next = node9;
  node9.prev = node8;
  node9.next = node10;
  node10.prev = node9;
  node11.next = node12;
  node12.prev = node11;
  return flatten(node1);
}

module.exports = () => console.log(test());
