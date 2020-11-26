// #1
multiplicationTable = function(size) {
  let arr = [];
  
  for(let i=1; i<=size; i++) {
    let sub = [];
    
    for(let j=0; j<size; j++)
      sub.push(i+(i*j));
    
    arr.push(sub);
  }
  
  return arr;
}

// #2
multiplicationTable = function(size) {
  return new Array(size).fill(0).map( (v, i) => new Array(size).fill(0).map( (v2, j) => (i+1)+((i+1)*j)));
}