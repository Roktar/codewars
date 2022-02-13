function doors(n){
  let doorArray = new Array(n).fill(true);
  
  for(let i=1; i<n; i++) {
    for(let j=i; j<n; j=j+(i+1))
      doorArray[j] = !doorArray[j];
  }
  
  return doorArray.filter( b => b ).length;
}