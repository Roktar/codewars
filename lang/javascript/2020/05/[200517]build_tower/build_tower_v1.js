function towerBuilder(nFloors) {
  if(nFloors === 1)
    return ['*'];
      
  return new Array(nFloors).fill(null).map( (v, i) => {
    let arr = new Array(nFloors-(i+1));
    arr.fill(" ");
        
    return arr.join("") + "*".repeat(1+(2*i)) + arr.join("");
  });
  
}