var lengthofLongestSubscting = function (input) {
  let set = new Set();
  let max = 0,
    i = 0,
    j = 0;
  while (j < input.length && i < input.length) {
    if (!set.has(input[j])) {
      set.add(input[j]);
      j++;
      max = Math.max(j - i, max);
    } else {
      set.delete(input[i]);
      i++;
    }
  }
  console.log(max);
  return max;
};

module.exports = lengthofLongestSubscting;
