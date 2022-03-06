function zozonacci (pattern, length) {
  if(!pattern.length)
    return [];
  
  let result;
  let l = pattern.length;
  const zozonacci = {
      init(str, l) { return (str === "pad" ? [0, 1, 0, 0] : [0, 0, 0, 1]).slice(0, l); },
      fib(n, arr) { return arr[n-1]+arr[n-2]; },
      jac(n, arr) { return arr[n-1]+2*arr[n-2]; },
      pad(n, arr) { return arr[n-2]+arr[n-3]; },
      pel(n, arr) { return 2*arr[n-1]+arr[n-2]; }, 
      tet(n, arr) { return arr[n-1]+arr[n-2]+arr[n-3]+arr[n-4]; },
      tri(n, arr) { return arr[n-1]+arr[n-2]+arr[n-3]; }
    };
  
  result = zozonacci.init(pattern[0], length);
  
  for(let i=3; i<length-1; i++)
   result.push( zozonacci[pattern[(i-3)%l]](i+1, result) ); 

  return result;
}
