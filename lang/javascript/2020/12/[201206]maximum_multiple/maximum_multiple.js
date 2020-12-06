function maxMultiple(divisor, bound) { 
  for(let i = bound; i>divisor; i--) {
    if(i%divisor === 0)
      return i;
  }
  
  return;
}