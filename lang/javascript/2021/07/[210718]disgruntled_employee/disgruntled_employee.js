function off(n) {
    let arr = [], sqn = 1;

    while( (sqn*sqn) <= n) {
        arr.push(sqn*sqn);
        sqn++;
    }
        
    return arr;
}