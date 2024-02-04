howManyBees = function(hive) {
  if(!hive || hive.length == 0)
    return 0;
  
  let maxX = hive.length, maxY = hive[0].length;
  let count = 0;
  
  for(let i=0; i<maxX; i++) {
    for(let j=0; j<maxY; j++)
      count += find(i, j, 0, hive, maxX, maxY, null, i, j);
  }
  
  return count;
}

function find(x, y, depth, arr, maxX, maxY, dir, px, py) {
  if(x == maxX || y == maxY || x < 0 || x >= maxX || y < 0 || y >= maxY)
    return 0;
    
  let count = 0;
  
  if(arr[x][y] == 'b' && depth == 0) {
    count += find(x+1, y, 1, arr, maxX, maxY, 'r', x, y);
    count += find(x, y+1, 1, arr, maxX, maxY, 'u', x, y);
    count += find(x-1, y, 1, arr, maxX, maxY, 'l', x, y);
    count += find(x, y-1, 1, arr, maxX, maxY, 'd', x, y);
  } else if(arr[x][y] == 'e' && depth == 1) {
    count += find(x+1, y, 2, arr, maxX, maxY, dir, x, y);
    count += find(x, y+1, 2, arr, maxX, maxY, dir, x, y);
    count += find(x-1, y, 2, arr, maxX, maxY, dir, x, y);
    count += find(x, y-1, 2, arr, maxX, maxY, dir, x, y);
  } else if(arr[x][y] == 'e' && depth == 2 ) 
    return  (dir == 'u' && py+1 == y) || (dir == 'd' && py-1 == y) || (dir == 'l' && px-1 == x) || (dir == 'r' && px+1 == x) ? 1 : 0;
  
  return count;
}