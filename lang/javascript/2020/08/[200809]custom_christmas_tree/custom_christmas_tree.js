function customChristmasTree(chars,n){  
  let arr = [];
  let l = chars.length;
  let idx = -1;
  
  for(let i=1; i<n+1; i++) {
    let str = ' '.repeat(n-i);
    let sub = [];
    
    for(let j=0; j<i; j++)
      sub.push(chars[(++idx)%l]);
    
    arr.push(str+sub.join` `);
  }
  
  let trunkPos = Math.round(arr[arr.length-1].length/2)-1;
  
  return arr.join`\n` + '\n' + new Array(parseInt(n/3)).fill(0).map( v => ' '.repeat(trunkPos)+'|').join`\n`;  
}