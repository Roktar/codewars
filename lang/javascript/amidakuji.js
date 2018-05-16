function amidakuji(board) {
    var list = new Array(board[0].length+1);

    for(var i = 0; i < board[0].length+1; i++) {
        let loc = i;

        for(var j = 0; j < board.length-1; j++) {
                if(board[j+1][loc-1] == 1)
                    loc--;
                else if(board[j+1][loc+1] == 1)
                    loc++;
                console.log("[" + j + ", " + loc + "]");
            
        }
        list[loc] = i;
    }
    return list;
}

let ladder = [
    '001001',
    '010000',
    '100100',
    '001000',
    '100101',
    '010010',
    '101001',
    '010100'
];

console.log(amidakuji(ladder));

