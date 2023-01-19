var solve = function(board) {
    let l = board.length;
    let b = board[0].length;
    let coords = [];
    for(let i = 0; i < b; i++){
        console.log(board[0][i]);
        if(board[0][i] === "O"){
            traverse(0, i, board, coords);
        }
        console.log(board[l-1][i]);
        if(board[l-1][i] === "O"){
            traverse(l - 1, i, board, coords);
        }
    }
    for(let i = 1; i < l - 1; i++){
        console.log(board[i][0]);
        if(board[i][0] === "O"){
            traverse(i, 0, board, coords);
        }
        console.log(board[i][b-1]);
        if(board[i][b-1] === "O"){
            traverse(i, l - 1, board, coords);
        }
    }
    for(let i = 0; i < l - 1; i++){
        for(let j = 0; j < b - 1; j++){
            board[i][j] = "X";
        }
    }
    console.log(coords);
    for(let [a, b] of coords){
        board[a][b] = "O";
    }
    return board;
};

var traverse = (a, b, board, coords) => {
    let existing = coords.find(c => c[0] === a && c[1] === b);
    if(existing){
        return;
    }
    //map.set(a,b);
    coords.push([a,b]);
    if(a+1 < board.length && board[a+1][b] === "O"){
        traverse(a+1, b, board, coords);
    }
    if(b+1 < board[0].length && board[a][b+1] === "O"){
        traverse(a, b+1, board, coords);
    }
    if(a-1 >= 0 && board[a-1][b] === "O"){
        traverse(a-1, b, board, coords);
    }
    if(b-1 >=0 && board[a][b-1] === "O"){
        traverse(a, b-1, board, coords);
    }
}



module.exports = () => console.log(solve([["X","O","X","O","X","O"],["O","X","O","X","O","X"],["X","O","X","O","X","O"],["O","X","O","X","O","X"]]));