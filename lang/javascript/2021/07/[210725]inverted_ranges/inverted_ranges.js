function invertedRanges(ranges) {
  if(ranges.length === 0)
    return [[0, 100]];
  
  if(ranges[0][0] === 0 && ranges[ranges.length-1][1] === 100)
    return [];
    
  let first = 0;
  let arr = [];
  
  if(ranges[0][0] === 0) {
    first = ranges[0][1]+1;
  } else {
    if(ranges.length > 1) 
      arr.push([0, ranges[0][0]-1] );
    first = ranges[0][1]+1;
  }
  
  if(ranges.length === 1 && ranges[0][1] != 100)
    arr.push( [0, ranges[0][0]-1]);
    
  for(let i=0; i<ranges.length-1; i++) {
    arr.push( [first, ranges[i+1][0]-1] );
    first = ranges[i+1][1]+1;
  }
  
  arr.push( [ ranges[ranges.length-1][1]+1, 100]);
  
  return arr;
}