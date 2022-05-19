// #1
var runLengthEncoding = function(str){
  let results = [];
  let n = [];
  
  for(let v of [...str]) {
    if(n[1] != v) {
      results.push(n);
      n = [0, v];
    }
    n[0]++;
  }
  
  return results.push(n) && results.slice(1);
}

// #2
const runLengthEncoding = str => (str.match(/(.)\1*/g) || []).map( v => [v.length, v[0]]);