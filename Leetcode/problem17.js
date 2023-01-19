/** * @param {string} digits * @return {string[]} */

var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }
  return combinations("", digits);
};
var outputs = [];
var map = new Map();
map.set("2", "abc");
map.set("3", "def");
map.set("4", "ghi");
map.set("5", "jkl");
map.set("6", "mno");
map.set("7", "pqrs");
map.set("8", "tuv");
map.set("9", "wxyz");

var combinations = function (outPutString, digits) {
  if (digits.length === 0) {
    outputs.push(outPutString);
  } else {
    var firstLetterMappings = map.get(digits[0]);
    for (let c of firstLetterMappings) {
      combinations(outPutString + c, digits.slice(1));
    }
  }
  return outputs;
};

module.exports = letterCombinations;
