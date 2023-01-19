var subsets = function(nums) {
    if(nums.length === 1){
        return [[], [nums[0]]];
    }
    if(nums.length === 0){
        return [];
    }
    let smallAns = subsets(nums.slice(1));
    let finAns = smallAns.map(ans => [nums[0], ...ans]);
    finAns = [...finAns, ...smallAns];
    return finAns;
};

module.exports = () => console.log(subsets([1,2,3]));