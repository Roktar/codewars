function deleteNth(arr,n){
  let cnts = {};
  let result = [];
  
  for(let v of arr) {
    if(!cnts[v])
      cnts[v] = 0;
    
    if(cnts[v] < n) {
      cnts[v]++;
      result.push(v);
    }
  }
  
  return result;
}