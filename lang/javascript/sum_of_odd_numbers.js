function rowSumOddNumbers(n) {
    if(n === 1)
      return 1;
  
    let prev = -1;
    let val = 0;
  //  let level = 1;
  
  //   for(let i=0; i<n; i++) {
  //     val = 0;
  //     for(let j=0; j<level; j++) {
  //       console.log(prev);
  //       prev += 2;
  //       val += prev;
  //     }
  //     level++;
  //   }
    
    for(let i=1; i<n; i++)
      prev += (i*2);
    for(let i=1; i<n+1; i++)
      val += (prev+(i*2));
    return val;
  }