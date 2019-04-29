function reverse(right) {
  let loop = right.length;
  let arr = [ right[0] ];
  
  for(let i=loop; i>1; i--) {    
    arr.push(right[(i-loop)*(-1)+1]);
// or
// for(let i=1; i<loop; i++) {}
// arr.push(right[i]);
    
    for(let j= (arr.length-1); j > 0; j--) {
      /*
      let value1 = ( arr[j] > arr[j-1] ? arr[j]-arr[j-1] : arr[j-1]-arr[j] );
      let value2 = ( arr[j] > arr[j-1] ? arr[j] : arr[j-1] );
      arr[j-1] = value1;
      arr[j] = value2-value1;
      */
     let tmp = arr[j-1];
     arr[j-1] = ( arr[j] > arr[j-1] ? arr[j] - arr[j-1] : arr[j-1] - arr[j] );
     arr[j] = ( arr[j] > tmp ? arr[j] : tmp ) - arr[j-1];
    }
  }
  return arr;
}
