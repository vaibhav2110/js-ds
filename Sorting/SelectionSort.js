function selectionSort(array) {
  for (let i = 0; i <= array.length - 2; i++) {
    let minIndex = findMinIndex(array, i + 1);
    if (array[minIndex] < array[i]) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  console.log(array);
}

function findMinIndex(array, fromIndex) {
  let min = fromIndex;
  for (let i = fromIndex; i <= array.length - 1; i++) {
    if (array[i] < array[min]) {
      min = i;
    }
  }
  return min;
}

module.exports = selectionSort;
