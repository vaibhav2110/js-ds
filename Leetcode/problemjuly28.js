// var leastInterval = function (tasks, n) {
//   if(n === 0){
//       return tasks.length;
//   }
//   let obj = {};
//   for (let i = 0; i < tasks.length; i++) {
//     if (obj[tasks[i]]) {
//       obj[tasks[i]]++;
//     } else {
//       obj[tasks[i]] = 1;
//     }
//   }
//   console.log(obj);
//   let sortedArr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
//   let output = [];
//   let total = tasks.length - 1;
//   while (total >= 0) {
//     let added = false;
//     // output.push(sortedArr[0]);
//     // obj[sortedArr[i][0]]--;
//     for (let i = 0; i < sortedArr.length; i++) {
//         // if(i - n > 0 && sortedArr[i-n][0] !== sortedArr[i][0] && obj[sortedArr[i][0]] > 0){
//         if(obj[sortedArr[i][0]] > 0 && !ifExist(output, n, sortedArr[i][0])){
//             added = true;
//             output.push(sortedArr[i][0]);
//             obj[sortedArr[i][0]]--;
//             total--;
//             break;
//         }
//         // else if(!output[output.length - n] && obj[sortedArr[i][0]] > 0){
//         //     added = true;
//         //     output.push(sortedArr[i][0]);
//         //     obj[sortedArr[i][0]]--;
//         //     total--;
//         //     break;
//         // }
//     }
//     if(!added){
//         output.push("idle");
//     }
//   }
//   console.log(sortedArr);
//   console.log(output);
//   return output.length;
// };

// var ifExist = (output, n, val) => {
//     for(let i = output.length - n; i <= output.length - 1; i++){
//         if(!output[i]){
//             continue;
//         }
//         if(output[i] === val){
//             return true;
//         }
//     }
//     return false;
// }
var leastInterval = function (tasks, n) {
  if (n === 0) {
    return tasks.length;
  }
  let countArr = new Array(26).fill(0);
  for (let i = 0; i < tasks.length; i++){
    countArr[tasks[i].charCodeAt(0) - 65]++;
  }
  countArr = countArr.sort((a, b) => a - b);
  let max = countArr[25] - 1;
  let spaces = max * n;
  for(let i = 24; i >= 0; i--){
      spaces -= Math.min(max, countArr[i]);
  }
  if(spaces < 0){
      spaces = 0;
  }
  return tasks.length + spaces;
};

module.exports = () => console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
