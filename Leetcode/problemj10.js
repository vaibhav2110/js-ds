var searchInsert = function(nums, target) {
    if(target <= nums[0] || nums.length === 0){
        return 0;
    } else if(target > nums[nums.length - 1]){
        return nums.length;
    }
    let start = 0;
    let end = nums.length - 1;
    while(start < end){
        let mid = Math.floor(( start + end ) / 2);
        if(target === nums[mid]){
            return mid;
        } else if(target > nums[mid]){
            start = mid + 1;
        } else if(target < nums[mid]){
            end = mid - 1;
        }
    }
    return nums[start] < target ? start + 1 : start;
};

module.exports = () => console.log(searchInsert([1,3,5,6,9], 6));