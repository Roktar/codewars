function multTriangle(n) {
  let sum_arr = new Array(3).fill(0);
    
  for(let i=1; i<n+1; i++) {
    let subarr = [];
    
    for(let j=1; j<i+1; j++) {
      let val = i*j;
      sum_arr[0] += val;
      if( val % 2 === 0 )
        sum_arr[1] += val;
      else
        sum_arr[2] += val;
      subarr.push(val);
    } // 1 ~ m
    
    if(i > 1) {
      for(let j=0; j < i-1; j++) {
        sum_arr[0] += subarr[j];
        if(subarr[j] % 2 === 0)
          sum_arr[1] += subarr[j];
        else
          sum_arr[2] += subarr[j];
      }
    } // m+1 ~ l
  }
  return sum_arr;
}