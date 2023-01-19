var change = function(amount, coins) {
    if(coins.length === 1){
        return ((amount % coins[0] === 0) ? (amount / coins[0]) : 0);
    }
    let table = new Array(coins.length + 1).fill(0).map(item =>(new Array(amount + 1).fill(0)));
    table[0][0] = 1;
    for(let i = 1; i <= coins.length; i++){
        for(let j = 0; j <= amount; j++){
            if(j < coins[i - 1]){
                table[i][j] = table[i-1][j];
            } else{
                table[i][j] = table[i-1][j] + table[i][j-coins[i - 1]];
            }
        }
    }
    return table[coins.length][amount];
};

module.exports = () => console.log(change(5, [1,2,5]));