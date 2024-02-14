// #1
function fibonacci(max) {
  let fib = [0, 1, 1];
  let now = 0, v = 0;
  
  while(true) {
    now = fib[fib.length-2] + fib[fib.length-1];
    
    if(now >= max)
     return v;
    
    if( (now%2) === 0) v += now;
    fib.push(now);
  }
}

// #2
function fibonacci(max) {
  let fib = [1, 1];
  let now = 0, v = 0;
  
  while(true) {
    now = fib[0] + fib[1];
    
    if(now >= max)
     return v;
    
    if( (now%2) === 0) v += now;
    
    fib = [fib[1], now];
  }
}