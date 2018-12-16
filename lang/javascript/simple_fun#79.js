function deleteDigit(n) {
    let arr = [...n.toString()];
    let v_arr = [];
    let v = "";
    let idx = 0;
    
    for(let i=0; i<arr.length; i++) {
      for(let j=0; j<arr.length; j++) {
        if(idx === j)
          continue;
        v += arr[j];
      }
      v_arr.push(v);
      idx++;
      v = "";
    }
    
    return parseInt(v_arr.sort( (a, b) => a <= b )[0]);
  }