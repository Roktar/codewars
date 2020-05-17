function towerBuilder(nFloors) {
  if(nFloors === 1)
    return ['*'];

  let arr = [];
  
  for(let i=1; i<=nFloors; i++) {
    let sub = new Array(nFloors-i);
    let t = "*".repeat(1+(2*(i-1)));
    sub.fill(" ");
    
    arr.push(sub.join("") + t + sub.join(""));
  }
  
  return arr;  
}