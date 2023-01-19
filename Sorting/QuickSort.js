function QuickSort(array, startIndex, endIndex) {
  if (startIndex > endIndex) {
    return;
  }
  let pIndex = Partition(array, startIndex, endIndex);
  QuickSort(array, startIndex, pIndex - 1);
  QuickSort(array, pIndex + 1, endIndex);
}

function Partition(array, startIndex, endIndex) {
  let pivot = array[endIndex];
  let pIndex = startIndex;
  for (let i = startIndex; i <= endIndex - 1; i++) {
    if (array[i] <= pivot) {
      let temp = array[i];
      array[i] = array[pIndex];
      array[pIndex] = temp;
      pIndex++;
    }
  }
  let temp = array[pIndex];
  array[pIndex] = pivot;
  array[endIndex] = temp;
  return pIndex;
}

module.exports = QuickSort;
