function minSum(arr) {
  let sub = [], sz = arr.length;
  
  sort(arr);
  for(let i=0; i<arr.length/2; i++) {
    sub.push( arr[i] * arr[sz-i-1] );
  }
  
  return sub.reduce( (t, v, i) => t += v );
}

function sort(arr) {
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length-i; j++) {
      if(arr[j] > arr[j+1]) {
        arr[j] += arr[j+1];
        arr[j+1] = arr[j] - arr[j+1];
        arr[j] -= arr[j+1];
      }
    }
  }
}