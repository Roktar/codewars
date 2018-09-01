function add(a, b) {
    let carry = 0;
    let max = reverse((a.length >= b.length ? a : b));
    let min = reverse((a.length >= b.length ? b : a));

    let str = reverse([...min].reduce((t, v, i) => {
        let st = parseInt(v) + parseInt(max[i]) + carry;
        carry = parseInt(st / 10);
        t.push(parseInt(st % 10));
        return t;
    }, []).join(""));

    let dif = (max.length - str.length);
    if(dif)
        str = appendRightNumberDigit(max, str, carry, dif);
    else if(carry)
        str = carry.toString().concat(str);
    return str;
}

function reverse(str) {
    let s = str.split(" ").reduce((rs, s, i) => {
        let arr = [];
        [...s].forEach((item, i) => {
            arr.splice(0, 0, item);
        });
        rs += arr.join("") + " ";
        return rs;
    }, "");
    return s.substring(0, s.length - 1);
}

function appendRightNumberDigit(max, str, carry, dif) {
    let sub = [...reverse(max).substr(0, dif)];
    let arr = [];
    sub.forEach((item, i) => {
        let st = parseInt(item) + carry;
        carry = parseInt(st / 10);
        arr.push(parseInt(st % 10));
    });
    str = reverse(arr.join("")).concat(str);
    if (carry != 0)
        str = carry.toString().concat(str);
    return str;
}