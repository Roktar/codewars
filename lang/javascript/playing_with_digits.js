function digPow(n, p){  
    let n_arr = getNumberArray(n).reverse();
    let target = calculateValue(n_arr, p);
      
    return findDigits(n, target);
  }
  
  function getNumberArray(n) {
    let divisor = 1;
    let tmp = 0;
    let new_arr = [];
    let ep = 0.000001;
    let len = n.toString().length;
    
    while( (tmp = (n/divisor)%10) <= ep || len ) {
      new_arr.push( parseInt(tmp) );
      divisor *= 10;
      len--;
    }
    
    return new_arr;
  }
  
  function calculateValue(arr, s) {
    return arr.reduce((t, v, i) => t += Math.pow(v, s++), 0);
  }
  
  function findDigits(origin, calc_val) {
    let i = 1;
    
    while( ((origin*i) < calc_val) )
      i++;
      
    if( (origin*i) != calc_val )
      return -1;
    return i;
  }