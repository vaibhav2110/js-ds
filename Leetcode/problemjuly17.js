var topKFrequent = function (nums, k) {
  let heap = new Heap();
  for (let i = 0; i < nums.length; i++) {
    heap.insert(nums[i]);
  }
  let output = [];
  for (let i = 0; i < k; i++) {
    output.push(heap.getMax());
  }
  console.log(output);
};

class Heap {
  heapArray = [];
  currentPosition = -1;
  indexMap = new Map();

  insert(item) {
    if (this.indexMap.has(item)) {
      this.heapArray[this.indexMap.get(item)][1]++;
      this.fixUp(this.indexMap.get(item));
    } else {
      this.heapArray[++this.currentPosition] = [item, 1];
      this.indexMap.set(item, this.currentPosition);
      this.fixUp(this.currentPosition);
    }
  }

  fixUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (
      parentIndex >= 0 &&
      this.heapArray[index][1] > this.heapArray[parentIndex][1]
    ) {
      let temp = this.heapArray[index];
      this.heapArray[index] = this.heapArray[parentIndex];
      this.heapArray[parentIndex] = temp;
      let currentIndex = this.indexMap.get(this.heapArray[index][0]);
      this.indexMap.set(
        this.heapArray[index][0],
        this.indexMap.get(this.heapArray[parentIndex][0])
      );
      this.indexMap.set(this.heapArray[parentIndex][0], currentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  getMax() {
    let result = this.heapArray[0];
    this.heapArray[0] = this.heapArray[this.currentPosition];
    this.indexMap.set(this.heapArray[0][0], 0);
    this.indexMap.delete(result[0]);
    this.heapArray[this.currentPosition] = null;
    this.currentPosition--;
    this.fixDown(0);
    return result[0];
  }

  fixDown(index) {
    while (index < this.currentPosition) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let childIndex = -1;
      if (leftChildIndex > this.currentPosition) {
        return;
      }
      if (rightChildIndex > this.currentPosition) {
        childIndex = leftChildIndex;
      } else {
        childIndex =
          this.heapArray[rightChildIndex][1] > this.heapArray[leftChildIndex][1]
            ? rightChildIndex
            : leftChildIndex;
      }
      if (this.heapArray[index][1] < this.heapArray[childIndex][1]) {
        let temp = this.heapArray[index];
        this.heapArray[index] = this.heapArray[childIndex];
        this.heapArray[childIndex] = temp;
        let currentIndex = this.indexMap.get(this.heapArray[index][0]);
        this.indexMap.set(
          this.heapArray[index][0],
          this.indexMap.get(this.heapArray[childIndex][0])
        );
        this.indexMap.set(this.heapArray[childIndex][0], currentIndex);
      }
      index = childIndex;
    }
  }
}

module.exports = () => topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1], 3);
