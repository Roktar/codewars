function upArray(arr) {
  if( arr.some( v => v < 0 || v > 9) || !arr.length )
    return null;

  if( (++arr[arr.length-1]) > 9) {
    let c = 1;
    arr[arr.length-1] -= 10;
    
    for(let i=arr.length-2; i >= 0; i--) {
      if((++arr[i]) > 9)
        arr[i] = arr[i]-10;
      else {
        c = 0;
        break;
      }
    }
    
    if(arr[0] > 9)
      arr[0] -= 10;
    if(c)
      arr.unshift(1);
  }
  
  return arr;
}