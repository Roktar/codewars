function add(a, b) {
    let carry = [0];
    let max = reverse((a.length >= b.length ? a : b));
    let min = reverse((a.length >= b.length ? b : a));
    let str = reverse([...min].reduce(calculateAddOperation(carry, max), []).join(""));
    let dif = (max.length - str.length);
    
    if(dif)
        str = reverse([...reverse(max).substr(0, dif)].reduce(calculateAddOperation(carry), []).join("")).concat(str);
    if(carry[0])
        str = carry[0].toString().concat(str);
    return str;
}

function calculateAddOperation(carry, max) {
  return function(t, v, i) {
    let st = 0;
    if(max)
      st = parseInt(v) + parseInt(max[i]) + carry[0];
    else 
      st = parseInt(v) + carry[0];
    carry[0] = parseInt(st / 10);
    t.push(parseInt(st % 10));
    return t;
  }
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