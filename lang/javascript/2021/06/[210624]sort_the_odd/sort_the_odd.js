function sortArray(array) {
  let oddValues = [], indexes = [];
  
  array.forEach( (v, i) => {
    if(Math.abs(v%2)===1) {
      oddValues.push(v);
      indexes.push(i);
    }
  });
  
  oddValues.sort( (a, b) => a-b );
  
  indexes.forEach( (v, i) => array[v] = oddValues[i] );
  
  return array;   
}