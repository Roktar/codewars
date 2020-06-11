function josephus(items,k){
  let result = [];
  let m = items.length;
  
  for(let i=0; i<m; i++) {
    for(let j=0; j<k; j++)
      items.push(items.shift());
    result.push(items.pop());
  }
  
  return result;
}