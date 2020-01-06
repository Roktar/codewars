function interleave() {
  let arr = Array.prototype.slice.call(arguments);
  let result = [];
  let maxSize = arr.reduce( (max, arr, i) => (arr.length > max ? arr.length: max), 0);
  
  for(let i=0; i<maxSize; i++) {
    for(let j=0; j<arr.length; j++) {
    
      if( typeof arr[j][i] === "undefined" )
        result.push(null);
      else
        result.push(arr[j][i]);
    }
  }
  
  return result;
}