function InsertionSort(array) {
  console.log(`Before sorting [${array}]`);
  let n = array.length;
  for (let k = 1; k <= n - 1; k++) {
    let value = array[k];
    holeIndex = k;
    for (let j = k - 1; j >= 0; j--) {
      if (array[j] > value) {
        array[j + 1] = array[j];
        holeIndex--;
      }
    }
    array[holeIndex] = value;
  }
  console.log(`After sorting [${array}]`);
}

module.exports = InsertionSort;
