class Heap {
  heapArray = [];
  currentPosition = -1;

  insert(item) {
    this.heapArray[++this.currentPosition] = item;
    this.fixUp(this.currentPosition);
  }

  fixUp(position) {
    let parentPosition = Math.floor((position - 1) / 2);
    while (
      parentPosition >= 0 &&
      this.heapArray[parentPosition] < this.heapArray[position]
    ) {
      let temp = this.heapArray[parentPosition];
      this.heapArray[parentPosition] = this.heapArray[position];
      this.heapArray[position] = temp;
      position = parentPosition;
      parentPosition = Math.floor((position - 1) / 2);
    }
  }

  getMax() {
    let result = this.heapArray[0];
    this.heapArray[0] = this.heapArray[this.currentPosition];
    this.heapArray[this.currentPosition] = null;
    this.currentPosition--;
    this.fixDown(0, -1);
    return result;
  }

  heapSort() {
    for (let i = 0; i <= this.currentPosition - 1; i++) {
      let temp = this.heapArray[0];
      this.heapArray[0] = this.heapArray[this.currentPosition - i];
      this.heapArray[this.currentPosition - i] = temp;
      this.fixDown(0, this.currentPosition - i - 1);
    }
  }

  fixDown(index, upto) {
    if (upto < 0) upto = this.currentPosition;

    while (index < upto) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let childIndex = -1;
      if (leftChildIndex > upto) {
        return;
      }
      if (rightChildIndex > upto) {
        childIndex = leftChildIndex;
      } else {
        childIndex =
          this.heapArray[leftChildIndex] > this.heapArray[rightChildIndex]
            ? leftChildIndex
            : rightChildIndex;
      }
      if (this.heapArray[index] < this.heapArray[childIndex]) {
        let temp = this.heapArray[index];
        this.heapArray[index] = this.heapArray[childIndex];
        this.heapArray[childIndex] = temp;
      }
      index = childIndex;
    }
  }
}

let heap = new Heap();
heap.insert(12);
heap.insert(13);
heap.insert(2);


console.log(heap.getMax());
console.log(heap.getMax());
console.log(heap.getMax());

heap.insert(500);
heap.insert(26);
//heap.heapSort();


module.exports = () => console.log(heap.heapArray);
