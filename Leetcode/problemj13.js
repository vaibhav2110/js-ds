var largestDivisibleSubset = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let dp = new Array(nums.length).fill(1);
    let max = -1;

    for(let i = 1; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] % nums[j] === 0 && dp[i] < 1 + dp[j]){
                dp[i] = 1 + dp[j];
                max = Math.max(max, dp[i]);
            }
        }
    }

    let prev = -1;
    let subset = [];
    for(let i = nums.length - 1; i >=0; i--){
        if(dp[i] === max && (prev === -1 || prev % nums[i] === 0)){
            subset.push(nums[i]);
            max--;
            prev = nums[i];
        }
    }
    return subset;
};

module.exports = () => console.log(largestDivisibleSubset([1,4,26,12]));