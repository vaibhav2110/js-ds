function MergeSort(array) {
    let n = array.length;
    if(n < 2){
        return;
    }
    let mid = Math.floor(n / 2);
    let leftArray = array.slice(0, mid);
    let rightArray = array.slice(mid, n);
    MergeSort(leftArray);
    MergeSort(rightArray);
    Merge(leftArray, rightArray, array);
}

function Merge(leftArray, rightArray, array) {
    let i = 0, j = 0, k = 0;
    while(i < leftArray.length && j < rightArray.length){
        if(leftArray[i] < rightArray[j]){
            array[k] = leftArray[i];
            i++;
        }
        if(leftArray[i] > rightArray[j]){
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }
    while(i < leftArray.length) {
        array[k] = leftArray[i];
        i++;
        k++;
    }
    while(j < rightArray.length) {
        array[k] = rightArray[i];
        i++;
        k++;
    }
}

module.exports = MergeSort;