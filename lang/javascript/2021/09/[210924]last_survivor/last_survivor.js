function lastSurvivor(letters, coords) {
  let i=-1;
  
  while( (coords[++i]) != undefined )
    letters = letters.substring(0, coords[i]) + letters.substring(coords[i]+1);
    
  return letters
}