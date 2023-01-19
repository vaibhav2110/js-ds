var reverseBits = function(n) {
    let output = 0;
    let count = 32;
    while(count--){
        output = output << 1;
        output += n & 1;
        n = n >> 1;
    }
    return output;
};

module.exports = () => console.log(reverseBits(43261596));