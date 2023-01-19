var convert = function (s, numRows) {
  if (numRows === 1 || s.length < numRows) {
    return s;
  }
  let finString = [];
  for (let i = 1; i <= numRows; i++) {
    let bigJump = true;
    let charIndex = i - 1;
    finString.push(s[charIndex]);
    let op1 = 2 * numRows - (2 * i + 1);
    let op2 = 2 * (i - 1);
    while (charIndex < s.length) {
      if (op1 < 0) {
        op1 = 2 * numRows - 3;
      }
      if (bigJump) {
        charIndex = charIndex + op1 + 1;
        if (charIndex >= s.length) {
          break;
        }
        finString.push(s[charIndex]);
        bigJump = false;
      } else if (op2 !== 0) {
        charIndex = charIndex + op2;
        if (charIndex >= s.length) {
          break;
        }
        finString.push(s[charIndex]);
        bigJump = true;
      } else {
        bigJump = true;
      }
    }
  }
  return finString.join("");
};

module.exports = convert;
