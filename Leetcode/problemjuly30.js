var wordBreak = function(s, wordDict) {
    if(wordDict.length === 1 && s !== wordDict[0]){
        return [];
    }
    let output = [];
    console.log(recurWord(s, wordDict, "", output));
};

var recurWord = (s, wordDict, curr, output) => {
    if(s.length === 0){
        output.push(curr.slice(1));
    }
    for(let i = 0; i < wordDict.length; i++){
        if(s.startsWith(wordDict[i])){
            recurWord(s.slice(wordDict[i].length), wordDict, curr + " "+ wordDict[i], output);
        }
    }
    return output;
}

module.exports = () => wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]);