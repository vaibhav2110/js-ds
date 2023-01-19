var getPermutation = function (n, k) {
  if (n.length === 0) {
    return;
  }
  let toPermute = "";
  for (let i = 1; i <= n; i++) {
    toPermute = toPermute + i;
  }
  permute(toPermute, k);
};

var permute = function (nums, k) {
  let permutations = [];

  const backtrack = (currentCombination, candidates) => {
    if (currentCombination.length == nums.length) {
      k--;
      if(k === 0){
        permutations.push(currentCombination);
        console.log(currentCombination);
        return;
      }
      //permutations.push(currentCombination);
    }
    if(k === 0){
        return;
    }
    for (var i = 0; i < candidates.length; i++) {
      //let nextCanditates =
      backtrack(
        currentCombination + candidates[i],
        candidates.slice(0, i) + candidates.slice(i + 1)
      );
      //currentCombination = currentCombination.slice(0, currentCombination.length - 1);
    }
  };
  backtrack("", nums);
  return permutations[0];
};

module.exports = () => console.log(getPermutation(3, 3));
