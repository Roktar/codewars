function selectSubarray(arr) {
  let subArray = [];
  
  for(let i=0; i<arr.length; i++) {
    let sub = [];
    
    for(let j=0; j<arr.length; j++) {
      if(i==j)
        continue;
      sub.push(arr[j]);
    }
    
    subArray.push([sub, Math.abs((sub.reduce( (t, v)=> t*=v))/(sub.reduce( (t, v) => t+=v))) ]);
  }
  
  subArray.sort( (a, b) => a[1]-b[1] );
    
  let m = subArray[0];
  
  for(let i=0; i<arr.length; i++) {
    if(arr[i] != m[0][i])
      return [i, arr[i]];
  }
    
  return [];
}