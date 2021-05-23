function swap(s, n){
  let bin = (n).toString(2), idx = 0;
  
  return [...s].map( (v, i) => {
    let asciiCode = v.charCodeAt(0);
    
    if( asciiCode >= 65 && asciiCode <= 90 || asciiCode >= 97 && asciiCode <= 122 ) {
      if(idx >= bin.length)
        idx = 0;
      
      if( bin[idx++] == 1 )
        return (asciiCode >= 65 && asciiCode <= 90) ? v.toLowerCase() : v.toUpperCase();
    }
    
    return v;
  }).join``;
}