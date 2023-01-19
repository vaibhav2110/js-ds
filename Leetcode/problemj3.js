let min = 0;

var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
  let min = costs.reduce((prev, curr, index) => {
      console.log(curr);
      if(index < costs.length / 2){
          prev += curr[0];
      } else {
          prev += curr[1];
      }
      return prev;
  }, 0);
  return min;
};

let costs = [
  [918, 704],
  [77, 778],
  [239, 457],
  [284, 263],
  [872, 779],
  [976, 416],
  [860, 518],
  [13, 351],
  [137, 238],
  [557, 596],
  [890, 227],
  [548, 143],
  [384, 585],
  [165, 54],
];
//let costs = [[10,20],[30,200],[400,50],[30,20]];
module.exports = () => twoCitySchedCost(costs);
