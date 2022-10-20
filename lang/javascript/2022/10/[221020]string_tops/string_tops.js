function tops(msg) {
  let l = msg.length;
  let idx = 5, loc = 1;
  let arr = [];
  
  if(l) {
    while(loc <= l) {
      arr.push(msg[loc]);
      loc += idx;
      idx += 4;
    }
    return arr.reverse().join``;
  } else
    return '';
}