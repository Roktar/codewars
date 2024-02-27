function cleverSplit(s){
  let res = [], prv = 0, par = false;
  
  for(let i=0; i<s.length+1; i++) {
    if(s[i] == '[' ) {
      par = true; 
      continue;
    } else if(s[i] == ']') 
      par = false;
    
    if(!par && (!s[i] || s[i] == ' ') ) {
      res.push(s.substring(prv, i));
      prv = i+1;
    }
  }
  
  return res;
}