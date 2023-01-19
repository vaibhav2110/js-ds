var nthUglyNumber = function(n) {
    let uglyNums = [1];
    let twoIndex = 0, threeIndex = 0, fiveIndex = 0;
    while(uglyNums.length !== n){
        let twoMultiple = uglyNums[twoIndex] * 2;
        let threeMultiple = uglyNums[threeIndex] * 3;
        let fiveMultiple = uglyNums[fiveIndex] * 5;

        let min = Math.min(twoMultiple, Math.min(threeMultiple, fiveMultiple));

        uglyNums.push(min);
        if(min === twoMultiple)
            twoIndex++;
        if(min === threeMultiple)
            threeIndex++;
        if(min === fiveMultiple)
            fiveIndex++;
    }
    return uglyNums;
};

console.log(nthUglyNumber(20));

