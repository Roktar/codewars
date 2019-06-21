function encode(input) {
  let chars = {prev:input[0], cnt:0, init : function(c) { this.prev = c; this.cnt = 0; }};
  let results = [];
  
  for(let c of input) {
    if(chars.prev != c) {
      results.push(chars.cnt + chars.prev);
      chars.init(c);
    }
    chars.cnt++;
  }
  results.push(chars.cnt + chars.prev);
  return results.join("");  
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function decode(input) {
  let arr = input.match(/[0-9]+?[a-zA-z]+/g);
  let results = [];
  
  for(let v of arr) {
    let cnt = /[0-9]+/.exec(v)[0];
    let c = v.substr(v.length-1);
    
    if(cnt > 1) {
      let val = "";
      for(let i=0; i<cnt; i++)
        val += c;
      results.push(val);
    } else 
      results.push(c);
  }
  
  return results.join("");
}