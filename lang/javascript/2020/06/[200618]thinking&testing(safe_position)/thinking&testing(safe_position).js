function testit(top,bottom){
  let t = top.split("\n"), b = bottom.split("\n");
  let w = t[0].length, h = (t.length > b.length? t.length:b.length);
  
  if( (h%2) === 0 ) {
    h += 1;
    t.push(new Array(w).fill('　'));
    b.push(new Array(w).fill('　'));
  } else
    (t.length > b.length? b: t).push(new Array(w).fill('　'));
  
  for(let i=0; i<w; i++) {
    let blockCnt = 0;
    
    for(let j=0; j<h; j++) {
      if(t[j][i] === '■')
        blockCnt++;
    }
    
    for(let j=0; j<h; j++) {
      if(b[j][i] === '■')
        blockCnt++;
    }
    
    if(blockCnt < h)
      return i+1;
  }
  
  return -1;
}