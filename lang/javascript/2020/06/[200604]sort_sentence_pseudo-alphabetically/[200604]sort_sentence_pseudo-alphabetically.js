function sort(sentence){
  let arr = sentence.replace(/[,.!]+/g, v => "").match(/[a-zA-Z]+/g).reduce( (t, v, i) => {
    let code = v.charCodeAt(0);
    if(code >= 65 && code <= 90)
      t.upper.push(v);
    else
      t.lower.push(v);
    return t;
  }, {lower:[], upper:[]});
  
  return arr.lower.sort().concat(arr.upper.sort( (v1, v2) => v2[0] > v1[0] )).join(" ");
}