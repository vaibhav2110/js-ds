function BubbleSort(array){

    console.log(`Before sorting [${array}]`);

    let n = array.length;
    for(let i = 1; i <= n - 1; i++){
        let swapped = false;
        for(let j = 0; j < n - i; j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }

    console.log(`After sorting [${array}]`);
}

module.exports = BubbleSort;