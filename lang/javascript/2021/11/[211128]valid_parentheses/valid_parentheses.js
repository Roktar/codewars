function validParentheses(parens) {
  let c = 0;
  
  for(let p of parens) {
    if("(" === p) c++;
    if(")" === p) {
      c--;
      if(c < 0) break;
    }
  }
  
  return c === 0;
}