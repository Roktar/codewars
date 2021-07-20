function sortSequence(sequence){
    //coding and coding..
    let sub = [];
    let idx = -1;
    const sum = arr => arr.reduce( (t, v) => t+=v, 0);
      
    while( (idx = sequence.findIndex( v => v === 0)) != -1 )
      sub.push(sequence.splice(0, idx).sort( (a, b) => a-b ).concat(sequence.splice(0, 1)));
  
    for(let i=1; i<sub.length; i++) {
      for(let j=i; j<sub.length; j++) {
        let a = sum(sub[i-1]), b=sum(sub[j]);
  
        if( a > b) {
          let t = sub[i-1];
          sub[i-1] = sub[j];
          sub[j] = t;
        }
      }
    }
        
    return sub.reduce( (ret, arr) => ret.concat(arr), []);
  }