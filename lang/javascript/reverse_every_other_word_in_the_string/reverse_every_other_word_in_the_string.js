const matrixfy = str => {
  let sz = 1;
  
  if(str.length === 0)
    return 'name must be at least one letter';
  
  while(sz*sz < str.length)
    sz++;
  
  let arr = [];
  
  for(let i=0; i<sz; i++) {
    let subarr = [];
    for(let j=0; j<sz; j++)
      subarr.push(str[i*sz+j] || '.');
    arr.push(subarr);
  }
  return arr;
};
