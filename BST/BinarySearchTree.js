let Node = require("./node").Node;

class BinarySearchTree {
  #rootNode;
  insert(data) {
    if (!this.#rootNode) {
      this.#rootNode = new Node(data);
    } else {
      this.insertNode(this.#rootNode, data);
    }
  }
  insertNode(node, data) {
    if (data <= node.data) {
      if (!node.leftChild) {
        node.leftChild = new Node(data);
      } else {
        this.insertNode(node.leftChild, data);
      }
    } else {
      if (!node.rightChild) {
        node.rightChild = new Node(data);
      } else {
        this.insertNode(node.rightChild, data);
      }
    }
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
  invertBST(){
    if(!this.#rootNode) return;
    this.invert(this.#rootNode);
  }
  invert(node){
    if(!node.leftChild && !node.rightChild){
      return;
    }
    if(node.leftChild){
      this.invert(node.leftChild);
    }
    let tempNode = node.leftChild;
    node.leftChild = node.rightChild;
    node.rightChild = tempNode;
    if(node.leftChild){
      this.invert(node.leftChild);
    }
    return node;
  }
  getMax() {
    if (!this.#rootNode) {
      return;
    } else {
      return this.getMaxNode(this.#rootNode);
    }
  }
  getMaxNode(node) {
    if (!node.rightChild) return node;
    return this.getMaxNode(node.rightChild);
  }
  getMin() {
    if (!this.#rootNode) {
      return;
    } else {
      return this.getMinNode(this.#rootNode);
    }
  }
  getMinNode(node) {
    if (!node.leftChild) return node;
    return this.getMinNode(node.leftChild);
  }
  delete(data) {
    if (!this.#rootNode) {
      return;
    } else {
      this.deleteNode(this.#rootNode, data);
    }
  }
  deleteNode(node, data) {
    if (!node) return node;
    if (data < node.data) {
      node.leftChild = this.deleteNode(node.leftChild, data);
    } else if (data > node.data) {
      node.rightChild = this.deleteNode(node.rightChild, data);
    } else  {
      if (!node.leftChild && !node.rightChild) {
        return null;
      } else if (!node.leftChild) {
        let tempNode = node.rightChild;
        node = null;
        return tempNode;
      } else if (!node.rightChild) {
        let tempNode = node.leftChild;
        node = null;
        return tempNode;
      }
      let tempNode = this.getMinNode(node.rightChild);
      console.log("To replace node " + tempNode.data);
      node.data = tempNode.data;
      node.rightChild = this.deleteNode(node.rightChild, tempNode.data);
    }
    return node;
  }
}

module.exports = BinarySearchTree;
