function solve(x, y) {
  let numberTable = {
    0:0,
    1:1,
    6:9,
    8:8,
    9:6,
  }
  
  let cnt = 0;
  
  for(let i=x; i<y; i++) {
    if(/[2|3|4|5|7]/.test(i.toString()))
      continue;
    
    let s = [...i.toString()];
    let r = Array.from(s).reverse();
  
    if(s.some( (v, j) => (v != numberTable[r[j]])) )
      continue;
  
    cnt++;
  }
  
  return cnt;
};