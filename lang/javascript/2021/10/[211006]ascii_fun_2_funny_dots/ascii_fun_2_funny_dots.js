function dot(n,m){
  let result = [], l = n*4+1, chars = ['|',' ','o', ' '];
  let header = `+${Array.from({length: n}).map( _ => "---").join`+`}+`;
  
  result.push(header);
  for(let i=0; i<m; i++) {
    let sub = [];
    
    for(let j=0;j<l; j++)
      sub.push(chars[j%4]);
    
    result.push(sub.join``);
    result.push(header);
  }
  
  return result.join`\n`;
}