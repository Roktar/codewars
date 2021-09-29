function oddRow(n) {
  let arr = [1+n*(n-1)];
  
  for(let i=1; i<n; i++)
    arr.push( arr[i-1]+2 );
  
  return arr;
}