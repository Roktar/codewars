function longestRepetition(s) {
  let counts = [];
  let ch_count = ["", 0];
  
  [...s].forEach( v => {
    if( v != ch_count[0] ) {
      counts.push(ch_count);
      ch_count = [v, 0];
    }
    ch_count[1]++;
  });
  
  counts.push(ch_count);
  return sort(counts)[0];
}

function sort(arr) {  
   for(let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
      if( arr[j][1] > arr[i][1] ) {
        let t = arr[j];
        arr[j] = arr[i];
        arr[i] = t;
      }
    }
  }
  return arr;
}