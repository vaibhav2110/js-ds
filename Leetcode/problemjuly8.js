// var threeSum = function (nums) {
//   let outputs = [];
//   let uniques = [];
//   while (nums.length !== 0) {
//     let current = -1 * nums.shift();
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//       map.set(current - nums[i], i);
//     }
//     for (let i = 0; i < nums.length; i++) {
//       if (map.has(nums[i])) {
//         if (i !== map.get(nums[i])) {
//           let val = [current * -1, nums[i], nums[map.get(nums[i])]]
//             .sort()
//             .join("");
//           if (!outputs.includes(val)) {
//             outputs.push(val);
//             uniques.push([current * -1, nums[i], nums[map.get(nums[i])]]);
//           }
//           map.delete(nums[map.get(nums[i])]);
//         }
//       }
//     }
//   }

var threeSum = function (nums) {
  let outputs = [];
  let uniques = [];
  nums.sort((a, b) => a - b);
  let set = new Set();
  for (let i = 0; i < nums.length - 2; i++) {
    let k = nums.length - 1;
    let j = i + 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
      }
      if (sum > 0) {
        k--;
      }
      if (sum === 0) {
        let val = [nums[i], nums[j], nums[k]].sort().join("");
        if (!outputs.includes(val)) {
          outputs.push(val);
          uniques.push([nums[i], nums[j], nums[k]]);
        }
        j++;
        k--;
      }
    }
  }
  return uniques;
};

module.exports = () => console.log(threeSum([-1, 0, 1, 2, -1, -4, -2]));
