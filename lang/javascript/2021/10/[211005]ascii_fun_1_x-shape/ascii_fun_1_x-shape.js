function x(n){
  let result = [];
  
  for(let i=0; i<n; i++) {
    let sub = Array.from({length: n});
    sub.forEach( (v, j, o) => o[j] = i===j || j===(n-i-1) ? '■' : '□' );
    result.push(sub.join``);
  }
 
  return result.join`\n`;
}