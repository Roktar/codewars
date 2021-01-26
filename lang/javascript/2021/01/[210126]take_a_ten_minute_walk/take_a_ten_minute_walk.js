function isValidWalk(walk) {
  if(walk.length > 10 || walk.length < 10 )
    return false;
    
  let w = 0, h = 0;
  
  walk.forEach( (v, i) => {
    if( v == 'n' )
      h++;
    else if( v == 's' )
      h--;
    else if( v == 'w' )
      w--;
    else if( v == 'e' )
      w++;
  });
    
  return w == 0 && h == 0;
}