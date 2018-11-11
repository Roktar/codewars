function finance(n) {
    let res = 0;
    let start_num = 0;
    let range = 3;
      
    for(let i=0; i<n; i++) {
      for(let j=1; j<range; j++)
        res += start_num+j;
      range++;
      start_num++;
    }
    return res;
  }