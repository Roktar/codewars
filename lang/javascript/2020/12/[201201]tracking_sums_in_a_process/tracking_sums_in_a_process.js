function trackSum(arr) {
  let valueArray = [];
  let noDupArray = [];
  let tmpArray = [];
  
  // 1
  noDupArray = [...new Set(arr)];
  valueArray.push( sum(arr) );
  
  // 2
  valueArray.push( sum(noDupArray) );
  
  // 3
  noDupArray.sort( (a, b) => b-a );
  
  // 4 
  for(let i=0; i<noDupArray.length-1; i++)
    tmpArray.push( noDupArray[i]-noDupArray[i+1] );
  valueArray.push( sum(tmpArray) );
  
  // 5
  noDupArray = [...new Set(tmpArray)];
  valueArray.push( sum(noDupArray) );

  return [valueArray, noDupArray];
}

function sum(arr) {
  return arr.reduce( (t, v) => t+=v, 0);
}