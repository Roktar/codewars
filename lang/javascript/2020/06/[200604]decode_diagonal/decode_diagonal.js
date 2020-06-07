function getDiagonalCode(grid) {
  let arr = grid.split("\n").map( v => v.split(" ") ), result = [];
  let r = -1, c = -1, rMax = 0, cMax = 0, dir = -1;
  
  rMax = arr.length;
  cMax = Math.max.apply(null, arr.map( v => v.length-1)  );
  
  while(c < cMax) {
    if(dir == 1) {
      if(r >= rMax-1)
        dir = -dir;
    } else {
      if( r < 1)
        dir = -dir;
    }
    
    r += dir;
    
    if(!arr[r][++c])
      break;
    result.push(arr[r][c]);
  }
  
  return result.join("");
}