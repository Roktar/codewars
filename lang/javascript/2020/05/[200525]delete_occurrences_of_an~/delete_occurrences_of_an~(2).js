function deleteNth(arr,n){
  return arr.reduce( (obj, v) => {    
    let {counts, nArr} = obj;
    
    if(!counts[v])
      counts[v] = 0;
    
    if(counts[v] < n) {
      counts[v]++;
      nArr.push(v);
    }
        
    return obj;
  }, {nArr:[], counts:{}}).nArr;
}


