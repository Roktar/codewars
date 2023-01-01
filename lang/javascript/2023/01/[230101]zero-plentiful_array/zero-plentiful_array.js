function zeroPlentiful(arr){
  let result = 0;
  let c = 0, c2 = 0;
  
  arr.push('.');
  for(let i=0; i<arr.length; i++) {
    for(let j=i; j<arr.length; j++) {
      if(arr[j] == 0)
        c++;      
      else {
        if(c >= 4) {
          c = 0;
          result++;
          i += j;
        } else if( c >= 1 && c <= 3)
          c2++;
      }
    }
  }
  
  return c2 ? 0 : result;
}