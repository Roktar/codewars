function splitAndAdd(arr, n) {
  if(arr.length === 1)
    return arr;
    
  let r = Array.from(arr);
  while( (n--) !== 0 ) {
    if(r.length < 2)
      break;
      
    let m = parseInt(r.length/2);
    let s = [r.slice(0, m), r.slice(m)];
    
   if((r.length%2) === 1)
      s[0].unshift(0);
    
    r = [];
    for(let i=0; i<s[0].length; i++)
      r[i] = s[0][i]+s[1][i];
  }
  
  return r;
}