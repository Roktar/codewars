function queueTime(customers, n) {
  if(!customers.length)
    return 0;
  
  let totalTime = 0;
  let processCnt = (n > customers.length ? customers.length : n);
  let processor = new Array(processCnt).fill(0);
  
  while(true) {
    for(let i=0; i<processCnt; i++) {
      if(customers.length > 0) {
        if(!processor[i])
        processor[i] = customers.shift();
      }
      
      if(processor[i])
      processor[i]--;
    }
    
    totalTime++;
    
    if(!customers.length) {
      if(processor.every( v => v === 0))
        break;
    }
  }
  
  return totalTime;
}