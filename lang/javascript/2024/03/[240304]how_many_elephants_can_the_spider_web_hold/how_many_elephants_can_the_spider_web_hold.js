function breakTheWeb (strength, width) {
  let counts = 0;
  let weight = 1000;
  
  while(strength >= weight) {    
    for(let i=0; i<width; i++) {
      if(weight > strength)
        break;
      strength -= weight;
      counts++;
    }
    
    weight += 1000;
    width--;
  }
  
  return counts;
}