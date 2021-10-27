function solution(number){
  let multiples = new Set();
  
  for(let i=0; i<parseInt((number-1)/3); i++) multiples.add(3*(i+1))
  for(let i=0; i<parseInt((number-1)/5); i++) multiples.add(5*(i+1))
  
  return Array.from(multiples.values()).reduce( (t, v) => t+=v, 0);
}