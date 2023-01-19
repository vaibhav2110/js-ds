var sortColors = function(nums){
    let c0 = 0;
    let c1 = 0;
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] === 0){
            c0++;
            c1++;
        }
        if(nums[i] === 1){
            c1++;
        }
        if(nums[i] > nums[i+1] && nums[i] === 1){
            swap(nums, i + 1, c0);
            c0++;
        } else if(nums[i] > nums[i+1] && nums[i] === 2){
            if(nums[i+1] === 0){
                swap(nums, i + 1, c0);
                c0++;
                c1++
            } else if(nums[i+1] === 1){
                swap(nums, i + 1, c1);
                c1++;
            }
        }
    }
    if(nums[nums.length - 1] === 1){
        swap(nums, nums.length - 1, c0);
    }
    if(nums[nums.length - 1] === 0){
        swap(nums, nums.length - 1, c0 + 1);
    }
    return nums;
}

var swap = function(nums, index, position){
    let temp = nums[index];
    nums[index] = nums[position];
    nums[position] = temp;
}

module.exports = () => console.log(sortColors([2,0,1,2,0,0]));