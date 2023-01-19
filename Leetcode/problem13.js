var romanToInt = function (s) {
  let obj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let num = 0;
  let prevChar = "";

  for (let char of s) {
    if (prevChar && obj[prevChar] < obj[char]) {
      num -= obj[prevChar];
      num += obj[char] - obj[prevChar];
    } else{
      num += obj[char];
    }
    prevChar = char;
  }
  return num;
};

module.exports = romanToInt;
