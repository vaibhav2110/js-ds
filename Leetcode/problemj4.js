var Solution = function(w) {
    this.weights = w;
    let sum = this.weights.reduce((p, c) => p + c);
    let comSum = 0;
    this.probs = this.weights.map((w, i) => {
        comSum += this.weights[i];
        return comSum/sum;
    });
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let start = 0;
    let end = this.probs.length - 1;
    let rand = Math.random();
    while(start < end){
        if(start === end || end < start){
            return start;
        } else if(this.probs[start] === rand){
            return start;
        } else if(this.probs[end] === rand){
            return end;
        }
        let mid = Math.floor((end + start) / 2);
        if(rand < this.probs[mid]){
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start;
};

let sol = new Solution([3,14,1,7]);

module.exports = () => console.log(sol.pickIndex());