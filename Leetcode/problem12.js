var intToRoman = function (num) {
  let arr = ["I", "V", "X", "L", "C", "D", "M"];
  let i = 0;
  let roman = [];
  while (num != 0) {
    let currentNum = num % 10;
    if (currentNum === 4) {
      roman.push(arr[i] + "" + arr[i + 1]);
    } else if (currentNum === 9) {
      roman.push(arr[i] + "" + arr[i + 2]);
    } else if (currentNum < 5) {
      roman.push(arr[i].repeat(currentNum));
    } else {
      roman.push(arr[i].repeat(currentNum % 5));
      roman.push(arr[i + 1]);
    }
    i += 2;
    num = parseInt(num / 10);
  }
  return roman.reverse().join("");
};

module.exports = intToRoman;
