function repeatAdjacent(s) {
  let result = [], sub = [];
  
  for(let i=0; i<s.length+1; i++) {
    let c = getLength(s[i], s, i);
    
    if(!s[i] || c == 1) {
      if(sub.length > 1) result.push(sub.join``);
      sub = [];
      continue;
    } else {
      sub.push(s[i].repeat(c));
      i += c-1;
    }
  }

  return result.length;
}

function getLength(s, str, idx) {
  let c = 0;
  
  for(let i=idx; i<str.length; i++) {
    if(s != str[i]) break;
    c++;
  }
  
  return c;
}