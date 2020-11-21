function blocks(s) {
  s = [...s].sort().join``;
  
  let result = [];
  let arr = [getCounts(s.match(/[a-z]/g)), getCounts(s.match(/[A-Z]/g)), getCounts(s.match(/[\d]/g))];
  let loop = arr.reduce( (v, obj) => {
    if(obj.maxCnt >= v)
      v = obj.maxCnt;
    delete obj.maxCnt;
    return v;
  }, 0);
  
  while(loop) {
    let sub = [];
    for(let i=0; i<arr.length; i++) {
      for(let k of Object.keys(arr[i])) {
        if(arr[i][k] > 0) {
          sub.push(k);
          arr[i][k]--;
        }
      }
    }
    result.push(sub.join``);
    loop--;
  }
  
  return result.join`-`;
}
                
function getCounts(arr) {
  if(!arr)
    return [];
  
  return arr.reduce( (obj, v) => {
    if(!obj[v])
      obj[v] = 0;
    
    obj[v]++; 
    
    if(obj[v] > obj.maxCnt)
        obj.maxCnt = obj[v];
    return obj;
  }, {maxCnt: 0});
}