function bingo(card, numbers) {

    var convertValue = function(n) {
        switch(n) {
            case 0 :
                return 'B';
            case 1 :
                return 'I';
            case 2 :
                return 'N';
            case 3 :
                return 'G';
            case 4 :
                return 'O';
            case 'B' :
                return 0;
            case 'I' :
                return 1;
            case 'N' :
                return 2;
            case 'G' :
                return 3;
            case 'O' :
                return 4;
        }
    };

    var replaceBoard = function(col, n) {        
        for(let i=1; i < bingo_pad.length; i++) {
            if(bingo_pad[i][col] == n)
                bingo_pad[i][col] = convertValue(col);
        }
    };

    var validation = function(str) {
        if(str == "BINGO" || str == "BBBBB" || str == "IIIII" || str == "NNNNN" || str == "GGGGG" || str == "OOOOO")
            return true;
        return false;
    };

    var bingo_pad = function() {
        let array = new Array();
            for(let i=0; i<card.length; i++) {
                let subarr = [];
                for(let j=0; j<card[i].length; j++) {
                    if(card[i][j] == 'FREE SPACE') {
                        subarr[j] = convertValue(j);
                        continue;
                    }
                    subarr[j] = card[i][j];
                }
                array[i] = subarr;
            }
        return array;
    }();

    numbers.forEach(function(nstr) {
            replaceBoard(convertValue(nstr.substr(0, 1)), nstr.substr(1, nstr.length-1));
    });

    for(let i=1; i<bingo_pad.length; i++) {      
        if(validation(bingo_pad[i].join("")))
            return true;
    } // 행

    for(let i=0; i<bingo_pad.length; i++) {
        let str = "";
        for(let j=1; j<bingo_pad.length; j++)
            str += bingo_pad[j][i];

        if(validation(str))
            return true;
    } // 열

    // 대각선
    let left_right_down = bingo_pad[1][0] + bingo_pad[2][1] + bingo_pad[3][2] + bingo_pad[4][3] + bingo_pad[5][4];
    let left_right_up = bingo_pad[5][5] + bingo_pad[4][4] + bingo_pad[3][3] + bingo_pad[2][2] + bingo_pad[1][1];

    if(validation(left_right_down) || validation(left_right_up))
        return true;

    return false;
}

let card = [
    ['B', 'I', 'N', 'G', 'O'],
    [1, 16, 31, 46, 61],
    [3, 18, 33, 48, 63],
    [5, 20, 'FREE SPACE', 50, 65],
    [7, 22, 37, 52, 67],
    [9, 24, 39, 54, 69]
  ]

  
let a = ['B1', 'I16', 'N31', 'G46', 'O61'];
let b = ['B1', 'I16', 'N31', 'G46', 'O63'];
let c = ['B1', 'I16', 'N31', 'G46'];
let d = ['B1', 'I16', 'N31', 'G46', 'O63', 'O61'];

console.log(bingo(card, a));
console.log(bingo(card, b));
console.log(bingo(card, c));
console.log(bingo(card, d));

let card2 = [ [ 'B', 'I', 'N', 'G', 'O' ],
  [ 15, 25, 43, 47, 61 ],
  [ 13, 18, 35, 48, 67 ],
  [ 5, 19, 'FREE SPACE', 58, 75 ],
  [ 1, 29, 41, 49, 71 ],
  [ 8, 24, 45, 46, 69 ] ]
let e = [ 'B14', 'I26', 'N44', 'G50', 'O62' ]

console.log(bingo(card2, e));