var singleNumber = function(nums) {
    let ones = 0, twos = 0, threes = 0;
    for(let i = 0; i < nums.length; i++){
        twos |= ones & nums[i];
        ones ^= nums[i];
        threes = ~(ones & twos);
        ones &= threes;
        twos &= threes;
    }
    return ones;
};

module.exports = () => console.log(singleNumber([1,1,1,2,4,4,4]));