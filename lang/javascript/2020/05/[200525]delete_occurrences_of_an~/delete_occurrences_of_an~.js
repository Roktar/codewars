function deleteNth(arr,n){
  let counts = {};
  let arr2 = [];
  
  for(let i=0; i<arr.length; i++) {
    if(!counts[arr[i]])
      counts[arr[i]] = 0;
    if(counts[arr[i]] < n) {
      counts[arr[i]]++;
      arr2.push(arr[i]);
    }
  }
  
  return arr2;
}