var generateParenthesis = function(n) {
    let outputs = [];
    backtrack(outputs, "", 0, 0, n);
    return outputs;
};

function backtrack(outputs, current, open, close, max){
    if(current.length === max * 2){
        outputs.push(current);
        return;
    }
    if(open < max){
        backtrack(outputs, current + "(", open + 1, close, max);
    }
    if(close < open){
        backtrack(outputs, current + ")", open, close + 1, max);
    }
}

module.exports = generateParenthesis;