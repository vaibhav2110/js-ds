class LinkedList {
  constructor(node) {
    this.head = node;
  }

  insertAtEnd(data) {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(data);
  }

  insertAtStart(data) {
    let node = this.head;
    this.head = new Node(data);
    this.head.next = node;
  }

  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  delete(data) {
    let node = this.head;
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    while (node) {
      if (node.next.data === data) {
        node.next = node.next.next;
        return;
      }
      node = node.next;
    }
  }

  deleteAt(index) {
    let node = this.head;
    let i = 0;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    while (node.next) {
      if (index - 1 === i) {
        node.next = node.next.next;
        return;
      }
      i++;
      node = node.next;
    }
  }

  traverse() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }

  findMiddle() {
    let start = this.head;
    let doubleStart = this.head;
    while (doubleStart && doubleStart.next) {
      start = start.next;
      doubleStart = doubleStart.next.next;
    }
    return start.data;
  }

  [Symbol.iterator]() {
    this.current = this.head;
    return this;
    // let node = this.head;
    // while (node) {
    //   yield node;
    //   node = node.next;
    // }
  }

  next() {
    if (!this.current) {
      return { done: true };
    } else {
      let currentNode = this.current;
      this.current = this.current.next;
      return { done: false, value: currentNode };
    }
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Test {
  run() {
    let headNode = new Node(1, null);
    let linkedList = new LinkedList(headNode);
    linkedList.insertAtEnd(2);
    linkedList.insertAtEnd(3);
    linkedList.insertAtEnd(4);
    linkedList.insertAtEnd(5);
    // linkedList.insertToStart(2);
    // linkedList.insertToStart(3);
    // linkedList.insertToStart(4);
    // linkedList.delete(1);
    //linkedList.deleteAt(4);
    console.log(linkedList.getLast());
    for (let node of linkedList) {
      console.log(node.data);
    }
    //linkedList.traverse();

    //console.log(`Middle element: ${linkedList.findMiddle()}`);
  }
}

module.exports = Test;
