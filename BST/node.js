class Node {
  #data = 0;
  #leftChild = null;
  #rightChild = null;
  #height = 0;

  constructor(data, leftChild = null, rightChild = null, height = 0) {
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
    this.height = height;
  }

  get data() {
    return this.#data;
  }
  set data(value) {
    this.#data = value;
  }
  get height() {
    return this.#height;
  }
  set height(value) {
    this.#height = value;
  }
  get leftChild() {
    return this.#leftChild;
  }
  set leftChild(value) {
    this.#leftChild = value;
  }
  get rightChild() {
    return this.#rightChild;
  }
  set rightChild(value) {
    this.#rightChild = value;
  }
}

module.exports = { Node };
