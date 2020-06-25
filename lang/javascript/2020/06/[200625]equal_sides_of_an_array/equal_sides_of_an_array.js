function findEvenIndex(arr){
  if(!arr.length)
    return 0;
    
  for(let i=0; i<arr.length; i++) {
    if(arr.slice(0, i).reduce( (t, v) => t+=v, 0) === arr.slice(i+1).reduce( (t, v) => t+=v, 0))
      return i;
  }
  
  return -1;
}