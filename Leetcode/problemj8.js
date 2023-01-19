var isSubsequence = function(s, t) {
    let currectCharIndex = 0;
    for(let i = 0; i < t.length; i++){
        if(s[currectCharIndex] === t[i]){
            currectCharIndex++;
        }
        if(currectCharIndex === s.length){
            return true;
        }
    }
    return false;
};

module.exports = () => console.log(isSubsequence("axc", "ahbgdc"));