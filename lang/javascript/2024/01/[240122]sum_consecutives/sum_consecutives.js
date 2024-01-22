function sumConsecutives(s) {
  let rslt = [], curVal=Number.MIN_SAFE_INTEGER;
  
  for(let i=0; i<s.length; i++) {
    if(s[i] != curVal) 
      curVal = s[i];
    
    let idx = findItemIndex(curVal, s, i);
    
    rslt.push(curVal*idx);
    i += idx-1;
  }
  
  return rslt;
}

function findItemIndex(v, arr, idx) {
  let cnt = 0;
  
  for(let i=idx; idx<arr.length; i++) {
    if(v != arr[i]) return cnt;
    else cnt++;
  }
  
  return cnt;
}