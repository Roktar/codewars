function decode(code, n) {
    return function() {
        let minus =  n.toString().split("");
        let len = minus.length;
        let array = new Array();

        for(let i=0; i<code.length; i++)
            array[i] = String.fromCharCode( (96+code[i])-parseInt(minus[i%len]) );

        return array.join("");
    }();

    // return function() {
    //     let list = [];
    //     let add = n.toString().split("");
    //     let len = add.length;
    //     for(let i=0; i<code.length; i++) {
    //         for(let j=1; j<27; j++) {
    //             let ch = String.fromCharCode(96+j);
    //             if(code[i] == ch) {
    //                 list[i] = j + parseInt(add[i%len]);
    //                 console.log(list[i]);
    //                 break;
    //             }
    //         }
    //     }
    //     return list;
    // }(); // encode
}

console.log(decode([ 20, 12, 18, 30, 21], 1939));