function nbDig(n, d) {
    let cnt = 0;
    
    for(let i=0; i<=n; i++)
      cnt += findCount(i*i, d);
      
    return cnt;
  }
  
  function findCount(val, d) {
    let target = d.toString();
    let items = val.toString();
    let cnt = 0;
    
    for(let s of items) {
      if(s === target)
        cnt++;
    }
    return cnt;
    //return [...val.toString()].filter( v => v === d.toString() ).length;
  }