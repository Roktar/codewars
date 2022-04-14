function diamond(n){
  if(n < 1 || n%2 === 0)
    return null;
  
  let m = Math.floor(n/2), a = [];
  
  for(let i=0; i<m; i++)
    a.push( ' '.repeat(m-i) + '*'.repeat(1+(i*2)));
  for(let i=m; i<n; i++)
    a.push( ' '.repeat(i-m) + '*'.repeat((1+(i*2)-((i-m)*4))));
  
  return a.join`\n`+'\n';
}