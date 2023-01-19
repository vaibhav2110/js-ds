let Node = require("./node").Node;

class AVL {
  #rootNode = null;
  insert(data) {
    this.#rootNode = this.insertNode(this.#rootNode, data);
  }
  insertNode(node, data) {
    if (!node) {
      return new Node(data);
    }
    if (data < node.data) {
      node.leftChild = this.insertNode(node.leftChild, data);
    } else {
      node.rightChild = this.insertNode(node.rightChild, data);
    }
    node.height =
      Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;
    return this.settleInsertion(node, data);
  }
  settleInsertion(node, data) {
    let balance = this.getBalance(node);
    if (balance > 1 && data < node.leftChild.data) {
      return this.rightRotation(node);
    }
    if (balance < -1 && data > node.rightChild.data) {
      return this.leftRotation(node);
    }
    if (balance > 1 && data > node.leftChild.data) {
      node.leftChild = this.leftRotation(node.leftChild);
      return this.rightRotation(node);
    }
    if (balance < -1 && data < node.rightChild.data) {
      node.rightChild = this.rightRotation(node.rightChild);
      return this.leftRotation(node);
    }
    return node;
  }
  rightRotation(node) {
    let tempNode = node.leftChild;
    let t = tempNode.rightChild;

    tempNode.rightChild = node;
    node.leftChild = t;

    node.height =
      Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;

    tempNode.height =
      Math.max(
        this.height(tempNode.leftChild),
        this.height(tempNode.rightChild)
      ) + 1;

    return tempNode;
  }
  leftRotation(node) {
    let tempNode = node.rightChild;
    let t = tempNode.leftChild;

    tempNode.leftChild = node;
    node.rightChild = t;

    node.height =
      Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;

    tempNode.height =
      Math.max(
        this.height(tempNode.leftChild),
        this.height(tempNode.rightChild)
      ) + 1;

    return tempNode;
  }
  getBalance(node) {
    if (node == null) {
      return 0;
    }
    return this.height(node.leftChild) - this.height(node.rightChild);
  }
  height(node) {
    if (!node) {
      return -1;
    }
    return node.height;
  }
  traversal() {
    if (!this.#rootNode) return;
    this.inOrderTraversal(this.#rootNode);
  }
  inOrderTraversal(node) {
    if (node.leftChild) {
      this.inOrderTraversal(node.leftChild);
    }
    console.log(node.data);
    if (node.rightChild) {
      this.inOrderTraversal(node.rightChild);
    }
  }
}

module.exports = AVL;
