function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var verticalTraversal = function (root) {
  if (!root) {
    return [];
  }
  let map = new Map();
  traverseRecurse(root, 0, 0, map);
  let entries = map.entries();
  console.log(
    Object.entries(Object.fromEntries(entries))
      .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
      .map((row) =>
        row[1].map(
          (r) =>
            r.sort((a, b) => (a[1] === b[1] ? (a[0] < b[0] ? 1 : -1) : 1))[1]
        )
      )
  );
};

var traverseRecurse = (node, x, y, map) => {
  if (map.has(x)) {
    map.get(x).push([node.val, y]);
  } else {
    map.set(x, [[node.val, y]]);
  }
  if (node.left) {
    traverseRecurse(node.left, x - 1, y - 1, map);
  }
  if (node.right) {
    traverseRecurse(node.right, x + 1, y - 1, map);
  }
};

var test = () => {
  let node1 = new TreeNode(9);
  let node2 = new TreeNode(2);
  let node3 = new TreeNode(3);
  let node4 = new TreeNode(4);
  let node5 = new TreeNode(5);
  let node6 = new TreeNode(6);
  let node7 = new TreeNode(7);

  node1.left = node2;
  node1.right = node3;
  node2.left = node4;
  node2.right = node5;
  node3.left = node6;
  node3.right = node7;

  console.log(verticalTraversal(node1));
};

module.exports = () => test();
