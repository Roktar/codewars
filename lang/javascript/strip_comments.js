function solution(input, markers) {
    let arr = [];
    
    input.split("\n").forEach( (v, i) => {
      let idx = -1;
      for(let marker of markers) {
        if(v.includes(marker)) {
          idx = [...v].findIndex( (s, i) => s === marker );
          break;
        }
      }
      
      if(idx > -1)
        arr.push( v.substr(0, idx-1) );
      else { 
        if(v[v.length-1] === " ")
          arr.push( v.substr(0, v.length -1) );
        else
          arr.push( v.substr(0, v.length) );
      }
    });
    return arr.join("\n");
  };